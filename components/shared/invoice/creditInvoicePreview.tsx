'use client'

import { format } from 'date-fns'
import { InvoiceLogo } from './invoiceLogo';

export interface CreditInvoice {
  buyer: {
    name: string
    email: string
    phone: string
  }
  invoiceDate: string | Date
  invoiceNumber?: string
  orderId: string
  orderName: string
  quantity: number
  unitRate: number
  amount: number
  subtotal?: number
  gst: number
  currency: string
  exchangeRate: number
  formatToUSD?: boolean
  showGST?: boolean
}

type CreditInvoicePreviewProps = {
  invoice: CreditInvoice
}

export default function CreditInvoicePreview({ invoice }: CreditInvoicePreviewProps) {
  const {
    buyer,
    invoiceDate,
    invoiceNumber,
    orderId,
    orderName,
    quantity,
    unitRate,
    amount,
    subtotal,
    gst,
    exchangeRate,
    formatToUSD = true,
    currency,
    showGST,
  } = invoice


  const formatUSD = (inrValue: number) => {
    const value = Number(inrValue) || 0
    const rate = exchangeRate || 1
    return (value * rate).toFixed(2)
  }

  const getAmount = (price: number): string => {
    return formatToUSD ? formatUSD(price) : amount.toFixed(2)
  }

  const getAmountWithCurrency = (price: number): string => {
    return formatToUSD ? `${formatUSD(price)}` : `${currency} ${amount.toFixed(2)}`
  }

  function numberToWords(amount: number): string {
    // TODO: fix this function
    const a = [
      '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
      'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
      'Seventeen', 'Eighteen', 'Nineteen'
    ]
    const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']

    function inWords(n: number): string {
      if (n === 0) return 'Zero'
      if (n < 20) return a[n]
      if (n < 100) return b[Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + a[n % 10] : '')
      if (n < 1000)
        return a[Math.floor(n / 100)] + ' Hundred' + (n % 100 !== 0 ? ' ' + inWords(n % 100) : '')
      if (n < 100000)
        return inWords(Math.floor(n / 1000)) + ' Thousand' + (n % 1000 !== 0 ? ' ' + inWords(n % 1000) : '')
      if (n < 10000000)
        return inWords(Math.floor(n / 100000)) + ' Lakh' + (n % 100000 !== 0 ? ' ' + inWords(n % 100000) : '')
      return inWords(Math.floor(n / 10000000)) + ' Crore' + (n % 10000000 !== 0 ? ' ' + inWords(n % 10000000) : '')
    }

    const total = formatToUSD ? amount * exchangeRate : amount
    const dollars = Math.floor(total)
    const cents = Math.round((total - dollars) * 100)
    const dollarsText = inWords(dollars) + (currency === 'USD' || currency === '(USD)'  ? ' Dollars' : '' )
    const centsText = cents > 0 ? ' and ' + inWords(cents) + ' Cents' : ''

    return dollarsText + centsText + ' Only'
  }

  const totalInWords = numberToWords(amount)


  return (
    <div
      id="invoice-content"
      style={{
        maxWidth: '794px',
        padding: '32px',
        margin: '0 auto',
        backgroundColor: 'white',
        boxSizing: 'border-box',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <div className="flex justify-between items-start">
          <InvoiceLogo />
          <div className="text-right text-sm">
            {
              invoiceNumber &&
              (<p><strong>Invoice No:</strong> {invoiceNumber}</p>)
            }

            <p>
              <strong>Date:</strong>{' '}
              {invoiceDate ? format(new Date(invoiceDate), 'dd MMM yyyy') : '—'}
            </p>
          </div>
        </div>

        <h1 className="text-xl font-semibold my-4">Invoice</h1>

        <div className="flex justify-between mb-6">
          <div>
            <p className="font-semibold">From</p>
            <p>Hire Yoo Infotech Private Limited,</p>
            <p> 2nd Floor, Second Cross</p>
            <p>80 Feet Rd, K R garden, Koramangala</p>
            <p>Bengaluru, Karnataka 560034</p>
            <p className="font-semibold">GSTIN: 29AAHCH4896D1Z6</p>
          </div>
          <div className="flex  flex-col">
            <p className="font-semibold">Bill To</p>
            <p>Name: {buyer.name || 'Talent User'}</p>
            <p>Phone No: {buyer.phone}</p>
            <p>Email: {buyer.email}</p>
            <p>Order Id: {orderId}</p>
          </div>
        </div>

        <h2 className="font-semibold mb-2">Credit Purchase Details</h2>
        <table className="w-full border-collapse text-left text-sm">
          <thead >
            <tr>
              <th className="p-2 border">Order Details</th>
              <th className="p-2 border">Quantity</th>
              <th className="p-2 border">Unit Rate ({currency})</th>
              <th className="p-2 border">Amount ({currency})</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border capitalize">{orderName}</td>
              <td className="p-2 border">{quantity}</td>
              <td className="p-2 border">{getAmount(unitRate)}
              </td>
              <td className="p-2 border">{getAmount(amount)}</td>
            </tr>
          </tbody>
        </table>
        <div className='flex justify-between mt-4'>
          <div className="flex flex-col">
            <p><strong>Total In Words:</strong></p>
            <p className="font-semibold italic">{totalInWords}</p>
          </div>

          <div className="text-right flex flex-col gap-1">
            {
              subtotal && <p><strong>Sub Total:</strong>{getAmount(subtotal)}</p>
            }

            {
              showGST &&
              <p><strong>IGST (18%):</strong> {getAmount(gst)}</p>
            }

            <p className="text-lg font-semibold">
              Total: {getAmountWithCurrency(amount)}
            </p>
            {
              formatToUSD && subtotal &&
              <p className="text-sm mt-1">
                (INR ₹{(subtotal + gst).toFixed(2)} @ ₹{(1 / exchangeRate).toFixed(2)} = ${amount.toFixed(2)})
              </p>
            }
          </div>
        </div>
      </div>

      <p className="text-center text-xs mt-12">
        **This is a computer-generated invoice. No signature required.**
      </p>
    </div>
  )
}
