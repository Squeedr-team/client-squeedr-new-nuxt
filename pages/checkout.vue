<template>
  <div class='p-5'>
    <div class='rounded-2xl bg-white shadow-sm p-3 sm:p-5 xl:p-8'>
      <div class='grid xl:grid-cols-3 grid-cols-1 gap-5'>
        <div class='col-span-2 order-2 xl:order-1'>
          <ValidationObserver v-slot='{ invalid }'>
            <h4 class='mb-3 text-lg'>Billing Address</h4>
            <form
              class='grid gap-5 grid-cols-12'
              @submit.prevent='onSubmit'>
              <div class='sm:col-span-6 col-span-12'>
                <ValidationProvider
                  v-slot='{ errors }'
                  name='firstname'
                  rules='required'>
                  <tw-input v-model='form.firstname' label='First name' :errors='errors' rounded />
                </ValidationProvider>
              </div>
              <div class='sm:col-span-6 col-span-12'>
                <ValidationProvider
                  v-slot='{ errors }'
                  name='lastname'
                  rules='required'>
                  <tw-input
                    v-model='form.lastname'
                    label='Last name'
                    :errors='errors'
                    rounded />
                </ValidationProvider>
              </div>
              <div class='col-span-12'>
                <ValidationProvider
                  v-slot='{ errors }'
                  name='lastname'
                  rules='required'>
                  <tw-input
                    v-model='form.username'
                    label='Username'
                    with-icon
                    :errors='errors'
                    placeholder='Enter your Username'
                    rounded>
                    <template #icon>
                      <div
                        class='h-full bg-secondary-300 rounded-bl-2xl rounded-tl-2xl flex justify-center items-center'>
                        @
                      </div>
                    </template>
                  </tw-input>
                </ValidationProvider>
              </div>
              <div class='col-span-12'>
                <tw-input
                  v-model='form.email'
                  label='Email (Optional)'
                  placeholder='you@example.com'
                  rounded>
                </tw-input>
              </div>
              <div class='col-span-12'>
                <ValidationProvider
                  v-slot='{ errors }'
                  name='address'
                  rules='required'>
                  <tw-input
                    v-model='form.address'
                    label='Address'
                    :errors='errors'
                    placeholder='Enter your address'
                    rounded>
                  </tw-input>
                </ValidationProvider>
              </div>

              <div class='sm:col-span-5 col-span-12'>
                <tw-select
                  v-model='form.country'
                  label='Country'
                  :options="[
                      {id:1,name:'United Sates'}
                    ]"
                  item-text='name'
                  item-value='name'
                  rounded>
                </tw-select>
              </div>
              <div class='sm:col-span-4 col-span-6'>
                <tw-select
                  v-model='form.state'
                  label='State'
                  :options="[
                      {id:1,name:'California'}
                    ]"
                  item-text='name'
                  item-value='id'
                  rounded>
                </tw-select>
              </div>
              <div class='sm:col-span-3 col-span-6'>
                <tw-input
                  v-model='form.zip'
                  label='Zip'
                  rounded>
                </tw-input>
              </div>
              <div class='col-span-12 border-t border-b py-5 my-4'>
                <div class='custom-control mb-2'>
                  <input id='same-address' type='checkbox'>
                  <label class='text-secondary-600' for='same-address'>
                    Shipping address is the same as my billing address
                  </label>
                </div>
                <div class='custom-control mb-2'>
                  <input
                    id='save-info' type='checkbox'>
                  <label class='text-secondary-600' for='save-info'>
                    Save this information for next time
                  </label>
                </div>
              </div>
              <div class='col-span-12'>
                <h4 class='mb-3'>Payment</h4>
                <div class='d-block'>
                  <div class='custom-control mb-2'>
                    <input id='credit' name='paymentMethod' type='radio' checked='' required=''>
                    <label class='text-secondary-600' for='credit'>Credit card</label>
                  </div>
                  <div class='custom-control mb-2'>
                    <input id='debit' name='paymentMethod' type='radio' required=''>
                    <label class='text-secondary-600' for='debit'>Debit card</label>
                  </div>
                  <div class='custom-control mb-2'>
                    <input id='paypal' name='paymentMethod' type='radio' required=''>
                    <label class='text-secondary-600' for='paypal'>Paypal</label>
                  </div>
                </div>
              </div>
              <div class='sm:col-span-6 col-span-12'>
                <tw-input
                  v-model='form.card_name'
                  label='Name on card'
                  hint='Full name as displayed on card'
                  rounded>
                </tw-input>
              </div>

              <div class='sm:col-span-6 col-span-12'>
                <tw-input
                  v-model='form.card_number'
                  label='Credit card number'
                  rounded>
                </tw-input>
              </div>
              <div class='sm:col-span-4 col-span-6'>
                <tw-input
                  v-model='form.expiration'
                  label='Expiration'
                  rounded>
                </tw-input>
              </div>
              <div class='sm:col-span-4 col-span-6'>
                <tw-input
                  v-model='form.cvv'
                  label='CVV'
                  rounded>
                </tw-input>
              </div>
              <div class='col-span-12 border-t pt-5 mt-4'>
                <button
                  :disabled='invalid'
                  class='bg-primary py-2 lg:py-3 text-lg md:text-xl rounded-2xl text-white px-5 w-full hover:bg-primary-700'>
                  Continue to checkout
                </button>
              </div>
            </form>
          </ValidationObserver>
        </div>
        <div class='col-span-1 order-1 xl:order-2'>
          <h4 class='flex justify-between items-center mb-3'>
            <span class='text-lg text-secondary-600'>Your cart</span>
            <span class='w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white'>
              3
            </span>
          </h4>
          <ul class='list-group mb-3'>

            <li class='flex justify-between border p-4'>
              <div>
                <h6 class='my-0'>Product name</h6>
                <small class='text-secondary-400 text-sm'>Brief description</small>
              </div>
              <span class='text-secondary-600'>$12</span>
            </li>
            <li class='flex justify-between border p-4 border-t-0'>
              <div>
                <h6 class='my-0'>Product name</h6>
                <small class='text-secondary-400 text-sm'>Brief description</small>
              </div>
              <span class='text-secondary-600'>$12</span>
            </li>
            <li class='flex justify-between border p-4 border-t-0'>
              <div>
                <h6 class='my-0'>Product name</h6>
                <small class='text-secondary-400 text-sm'>Brief description</small>
              </div>
              <span class='text-secondary-600'>$12</span>
            </li>
            <li class='flex justify-between border p-4 border-t-0 bg-primary'>
              <div class='text-white'>
                <h6 class='my-0 text-white'>Promo code</h6>
                <small class='text-xs'>EXAMPLECODE</small>
              </div>
              <span class='text-white'>-$5</span>
            </li>
            <li class='flex justify-between border p-4 border-t-0'>
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>

          <form>
            <tw-input
              type='text'
              append
              rounded
              class='form-control'
              placeholder='Promo code'>
              <template #append>
                <button type='submit' class='text-white bg-primary px-4 h-full rounded-tr-2xl rounded-br-2xl'>Redeem
                </button>
              </template>
            </tw-input>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  name: 'Checkout',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  layout: 'dashboardLayout',
  data() {
    return {
      form: {}
    }
  }
}
</script>

<style scoped>

</style>
