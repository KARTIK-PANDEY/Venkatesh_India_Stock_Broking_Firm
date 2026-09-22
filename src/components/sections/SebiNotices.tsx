import { Info } from "lucide-react";

const NOTICES = [
  "Prevent Unauthorised transactions in your account — Update your mobile numbers/email IDs with your stock broker. Receive information of your transactions directly from Exchange on your mobile/email at end of day. — Issued in the interest of investors.",
  "No need to issue cheques by investors while subscribing to IPO. Just write the bank account number and sign in the application form to authorise your bank to make payment in case of allotment. No worries for refund as the money remains in investor's account.",
  "Stock Brokers can accept securities as margin from clients only by way of pledge in the depository system w.e.f. September 1, 2020.",
  "Update your mobile number & email Id with your stock broker/depository participant and receive OTP directly from depository on your email id and/or mobile number to create pledge.",
  "Pay 20% upfront margin of the transaction value to trade in cash market segment.",
  "Check your Securities/MF/Bonds in the consolidated account statement issued by NSDL/CDSL every month.",
  "Investors may please refer to the Exchange's FAQs issued vide notice no. 20200731-7 dated July 31, 2020 and 20200831-45 dated August 31, 2020 and other guidelines issued from time to time in this regard."
];

export default function SebiNotices() {
  return (
    <section aria-labelledby="sebi-notices-heading" className="py-24 bg-background border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="bg-blue-50 border-l-4 border-blue-700 rounded-r-xl p-8 md:p-12 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-primary text-white p-2 rounded-full" aria-hidden="true">
              <Info className="w-6 h-6" />
            </div>
            <h2 id="sebi-notices-heading" className="text-2xl md:text-3xl font-display text-foreground">
              Important Information for Investors
            </h2>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10 list-none p-0 m-0">
            {NOTICES.map((notice, idx) => (
              <li key={idx} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-background border border-primary/20 flex items-center justify-center text-primary font-bold text-sm shadow-sm" aria-hidden="true">
                  {idx + 1}
                </span>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {notice}
                </p>
              </li>
            ))}
          </ol>

          <div className="pt-8 border-t border-primary/10">
            <div className="inline-block bg-background text-white px-6 py-4 rounded-lg font-bold text-center w-full md:w-auto uppercase tracking-wider text-sm shadow-lg">
              WE, REGENT COMTRADE PVT LTD IS DOING PROPRIETARY TRADING.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
