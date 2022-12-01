<template>
  <div class='p-5'>
    <div class='rounded-2xl bg-white shadow-md '>
      <div class='flex justify-between items-center border-b p-5'> Invoice <strong>01/01/01/2018</strong> <span
        class='float-right'>
                                    <strong>Status:</strong> Pending</span></div>
      <div class='p-5'>
        <div class='flex flex-wrap mb-2'>
          <div class='mt-4 lg:w-1/4 md:w-1/2 w-full py-3'>
            <h6>From:</h6>
            <div><strong>Webz Poland</strong></div>
            <div>Madalinskiego 8</div>
            <div>71-101 Szczecin, Poland</div>
            <div>Email: info@webz.com.pl</div>
            <div>Phone: +48 444 666 3333</div>
          </div>
          <div class='mt-4 lg:w-1/4 md:w-1/2 w-full py-3'>
            <h6>To:</h6>
            <div><strong>Bob Mart</strong></div>
            <div>Attn: Daniel Marek</div>
            <div>43-190 Mikolow, Poland</div>
            <div>Email: marek@daniel.com</div>
            <div>Phone: +48 123 456 789</div>
          </div>
          <div
            class='mt-4 lg:w-1/2 w-full flex flex-wrap lg:justify-end md:justify-center xs:justify-start items-center py-3'>
            <div class='sm:w-9/12 w-full'>
              <div class='flex items-center mb-3'>
                <img :src="require('~/assets/icons/logo.svg')" class='h-14' alt='' />
                <img :src="require('~/assets/icons/logoTxt.svg')" class='h-8 sm:h-10' alt='' />

                <!--                  <img class="logo-abbr mr-2" src="./images/logo.png" alt="">-->
                <!--                  <img class="logo-compact" src="./images/logo-text.png" alt="">-->
              </div>
              <span>Please send exact amount: <strong class='block'>0.15050000 BTC</strong>
                                                    <strong>1DonateWffyhwAjskoEwXt83pHZxhLTr8H</strong></span><br>
              <small class='text-muted'>Current exchange rate 1BTC = $6590 USD</small>
            </div>
            <div class='sm:w-3/12 w-full mt-3'>
              <qr-code
                :size='75'
                text='https://www.1stg.me'
              />
            </div>
          </div>
        </div>
        <div class='overflow-x-auto relative mt-3'>
          <table class='tw-table table-auto table-striped w-full'>
            <thead>
            <tr>
              <th class='text-center'>#</th>
              <th class='text-left' style='min-width: 180px'>Item</th>
              <th class='text-left' style='min-width: 180px'>Description</th>
              <th class='text-right' style='min-width: 120px'>Unit Cost</th>
              <th class='text-center'>Qty</th>
              <th class='text-right'>Total</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td class='text-center'>1</td>
              <td class='text-left'><strong>Origin License</strong></td>
              <td class='text-left'>Extended License</td>
              <td class='text-right'>$999,00</td>
              <td class='text-center'>1</td>
              <td class='text-right'>$999,00</td>
            </tr>
            <tr>
              <td class='text-center'>1</td>
              <td class='text-left'><strong>Origin License</strong></td>
              <td class='text-left'>Extended License</td>
              <td class='text-right'>$999,00</td>
              <td class='text-center'>1</td>
              <td class='text-right'>$999,00</td>
            </tr>
            <tr>
              <td class='text-center'>1</td>
              <td class='text-left'><strong>Origin License</strong></td>
              <td class='text-left'>Extended License</td>
              <td class='text-right'>$999,00</td>
              <td class='text-center'>1</td>
              <td class='text-right'>$999,00</td>
            </tr>
            <tr>
              <td class='text-center'>1</td>
              <td class='text-left'><strong>Origin License</strong></td>
              <td class='text-left'>Extended License</td>
              <td class='text-right'>$999,00</td>
              <td class='text-center'>1</td>
              <td class='text-right'>$999,00</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class='flex'>
          <div class='w-full lg:w-1/3 sm:w-5/12'></div>
          <div class='w-full lg:w-1/3 sm:w-5/12 ml-auto'>
            <table class='tw-table w-full'>
              <tbody>
              <tr class='border-t'>
                <td class='text-left'><strong>Subtotal</strong></td>
                <td class='text-right'>$8.497,00</td>
              </tr>
              <tr class='border-t'>
                <td class='text-left'><strong>Discount (20%)</strong></td>
                <td class='text-right'>$1,699,40</td>
              </tr>
              <tr class='border-t'>
                <td class='text-left'><strong>VAT (10%)</strong></td>
                <td class='text-right'>$679,76</td>
              </tr>
              <tr class='border-t'>
                <td class='text-left'><strong>Total</strong></td>
                <td class='text-right'><strong>$7.477,36</strong><br>
                  <strong>0.15050000 BTC</strong></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>


export default {
  name: 'Invoice',
  layout: 'dashboardLayout'
}
</script>

<style scoped>

</style>
