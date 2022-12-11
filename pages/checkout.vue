<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-200">
        <form @submit.prevent="checkout" class="w-full max-w-[600px]">
            <div>
                <input type="text" v-model="name" placeholder="name on card" id="" class="
              uppercase
              tracking-wide
              py-4
              px-8
              transition
              duration-500
              ease-in-out
              rounded
              mb-4
              w-full
            " />
            </div>
            <div id="card-number"></div>
            <div class="flex">
                <div id="card-expiry"></div>
                <div id="card-cvc"></div>
            </div>
            <div id="card-element-errors" role="alert"></div>
            <button type="submit" class="
            uppercase
            tracking-wide
            py-4
            px-8
            text-lg
            andale-mono
            text-white
            transition
            duration-500
            ease-in-out
            border border-solid border-white
            rounded
            text-center
            hover:bg-white hover:text-oly-green
            w-full
          ">
                pay now
            </button>
        </form>
        <div id="card-errors" class="my-8 text-red-500"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: null,
            elements: null,
            cardNumberElement: null,
            token: null
        }
    },
    methods: {
        async checkout() {
            console.log('check out form ')
            await this.createToken()
            if (this.token !== null || this.token !== undefined) {
                console.log('token found', this.token)
                try {
                    // create customer and pass the token 
                    const customer = await this.$strapi.$http.$post('stripes/account/create-customer', {
                        token: this.token.id,
                        name: 'amed saad',
                        email: 'saadamd@gmail.com',
                        phone: '00971563951800',
                        description: 'create customer for test',
                    })
                    console.log('customer', customer)

                    // create payment intentes and send this data customer_id, description, metadata 
                    const pData = {
                        customer_id: customer.id,
                        description: `order # ${this.order.id}`,
                        metadata: { order_id: this.order.id },
                        amount: this.order.amount * 100,
                        currency: 'eur',
                        token: this.token.id,
                    }
                    console.log('pData', pData)
                    const paymentIntents = await this.$strapi.$http.$post('stripes/account/create-payment-intents', pData)
                    console.log(paymentIntents)

                    // update order with status and charge id
                    const chargeId = await paymentIntents.charges.data[0].id;
                    const payout = {
                        charge_id: chargeId,
                        destination: this.order.provider.payout_account_id
                    }
                    console.log('payout', payout)
                    const updateprofile = await this.$strapi.update(`orders/${this.order.id}`, {
                        status: 'paid',
                        payout
                    })
                    console.log('updateprofile', updateprofile)

                } catch (error) {
                    console.log(error)
                }

            }
        },
        async createToken() {
            try {
                const getToken = await this.$stripe.createToken(this.cardNumberElement)
                this.token = getToken.token
            } catch (error) {
                console.log('createToken error', error)
                const displayError = document.getElementById('card-errors');
                displayError.innerHTML = '<p>' + error.message + '</p>';

            }

        }
    },
    mounted() {
        this.elements = this.$stripe.elements()
        if (this.elements) {

            this.cardNumberElement = this.elements.create('cardNumber', {
                classes: {
                    base: 'uppercase tracking-wide py-4 px-8 text-lgandale-mono text-black transition duration-500 ease-in-out rounded text-center hover:bg-white hover:text-oly-green mb-4 bg-white w-full',
                },
            })
            const cardExpiryElement = this.elements.create('cardExpiry', {
                classes: {
                    base: 'uppercase tracking-wide py-4 px-8 text-lgandale-mono text-white transition duration-500 ease-in-out rounded text-center hover:bg-white hover:text-oly-green mb-4  bg-white flex-1 ',
                },
            })
            const cardCvcElement = this.elements.create('cardCvc', {
                classes: {
                    base: 'uppercase tracking-wide py-4 px-8 text-lgandale-mono text-white transition duration-500 ease-in-out rounded text-center hover:bg-white hover:text-oly-green mb-4  bg-white ml-4 w-32',
                },
            })
            // Add an instance of the card Element into the `card-element` <div>
            this.cardNumberElement.mount('#card-number')
            cardExpiryElement.mount('#card-expiry')
            cardCvcElement.mount('#card-cvc')

            this.cardNumberElement.on('change', (event) => {
                console.log(event)
                const displayError = document.getElementById('card-errors');
                if (event.error) {
                    displayError.textContent = event.error.message;
                } else {
                    displayError.textContent = '';
                }
            });

        }
    },
    computed: {
        order() {
            return this.$store.state.order
        }
    }
}
</script>

<style>

</style>