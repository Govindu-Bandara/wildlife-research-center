import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lock, CreditCard, CheckCircle, ShieldCheck } from "lucide-react";

interface PaymentModalProps {
  tour: {
    title: string;
    price: string;
    dates: string;
    code: string;
  };
  onClose: () => void;
}

type Step = "form" | "processing" | "success";

interface FormState {
  name: string;
  email: string;
  phone: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}

function detectCardBrand(number: string): "visa" | "mastercard" | "amex" | null {
  const n = number.replace(/\s/g, "");
  if (n.startsWith("4")) return "visa";
  if (/^5[1-5]/.test(n)) return "mastercard";
  if (/^3[47]/.test(n)) return "amex";
  return null;
}

function formatCardNumber(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(.{4})/g, "$1 ").trim();
}

function formatExpiry(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length >= 3) return digits.slice(0, 2) + "/" + digits.slice(2);
  return digits;
}

function inputCls(hasError: boolean) {
  return `w-full rounded-lg border ${
    hasError ? "border-red-400 focus:ring-red-300" : "border-ink/20 focus:ring-canopy/30 focus:border-canopy"
  } bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 transition`;
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-ink-soft mb-1.5">{label}</label>
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

export default function PaymentModal({ tour, onClose }: PaymentModalProps) {
  const [step, setStep] = useState<Step>("form");
  const [bookingRef] = useState(() => `${tour.code}-${Math.floor(Math.random() * 90000) + 10000}`);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const cardBrand = detectCardBrand(form.cardNumber);

  function validate(): boolean {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.includes("@")) e.email = "Valid email required";
    if (form.cardNumber.replace(/\s/g, "").length < 16) e.cardNumber = "Enter a valid 16-digit card number";
    if (form.expiry.length < 5) e.expiry = "Enter a valid expiry date";
    if (form.cvv.length < 3) e.cvv = "Enter CVV";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStep("processing");
    setTimeout(() => setStep("success"), 2800);
  }

  return (
    <motion.div
      className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={step !== "processing" ? onClose : undefined}
    >
      <motion.div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-canopy px-6 py-5 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-mist/60 text-xs font-medium tracking-widest uppercase mb-1">
              <Lock size={11} /> Secure Checkout
            </div>
            <p className="text-mist font-display text-lg leading-snug">{tour.title}</p>
            <p className="text-mist/55 text-xs mt-0.5">{tour.dates}</p>
          </div>
          {step !== "processing" && (
            <button
              onClick={onClose}
              className="text-mist/40 hover:text-mist transition-colors mt-0.5 shrink-0"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Price band */}
        <div className="bg-canopy/90 px-6 py-3 flex items-center justify-between border-t border-mist/10">
          <span className="text-mist/65 text-sm">Total due today</span>
          <span className="text-mist font-display text-xl">{tour.price}</span>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          <AnimatePresence mode="wait">

            {step === "form" && (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                {/* Contact */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-ink-soft mb-3">
                    Contact details
                  </p>
                  <div className="space-y-3">
                    <Field label="Full name" error={errors.name}>
                      <input
                        type="text"
                        placeholder="Kasun Perera"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputCls(!!errors.name)}
                      />
                    </Field>
                    <div className="grid grid-cols-2 gap-3">
                      <Field label="Email address" error={errors.email}>
                        <input
                          type="email"
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={inputCls(!!errors.email)}
                        />
                      </Field>
                      <Field label="Phone (optional)">
                        <input
                          type="tel"
                          placeholder="+94 77 000 0000"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className={inputCls(false)}
                        />
                      </Field>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-ink/8" />

                {/* Card */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-ink-soft mb-3">
                    Card details
                  </p>
                  <div className="space-y-3">
                    <Field label="Card number" error={errors.cardNumber}>
                      <div className="relative">
                        <input
                          type="text"
                          inputMode="numeric"
                          placeholder="0000  0000  0000  0000"
                          value={form.cardNumber}
                          onChange={(e) =>
                            setForm({ ...form, cardNumber: formatCardNumber(e.target.value) })
                          }
                          className={inputCls(!!errors.cardNumber) + " pr-12"}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          {cardBrand === "visa" && (
                            <span className="text-[11px] font-black tracking-tight text-blue-700 italic">VISA</span>
                          )}
                          {cardBrand === "mastercard" && (
                            <div className="flex">
                              <div className="w-5 h-5 rounded-full bg-red-500 opacity-90" />
                              <div className="w-5 h-5 rounded-full bg-yellow-400 opacity-90 -ml-2" />
                            </div>
                          )}
                          {cardBrand === "amex" && (
                            <span className="text-[11px] font-black tracking-tight text-blue-500">AMEX</span>
                          )}
                          {!cardBrand && <CreditCard size={16} className="text-ink-soft" />}
                        </div>
                      </div>
                    </Field>
                    <div className="grid grid-cols-2 gap-3">
                      <Field label="Expiry date" error={errors.expiry}>
                        <input
                          type="text"
                          placeholder="MM / YY"
                          value={form.expiry}
                          onChange={(e) =>
                            setForm({ ...form, expiry: formatExpiry(e.target.value) })
                          }
                          className={inputCls(!!errors.expiry)}
                        />
                      </Field>
                      <Field label="CVV" error={errors.cvv}>
                        <input
                          type="text"
                          inputMode="numeric"
                          placeholder="•••"
                          maxLength={4}
                          value={form.cvv}
                          onChange={(e) =>
                            setForm({ ...form, cvv: e.target.value.replace(/\D/g, "").slice(0, 4) })
                          }
                          className={inputCls(!!errors.cvv)}
                        />
                      </Field>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-canopy text-mist py-3.5 text-sm font-medium hover:bg-canopy/90 active:scale-[0.98] transition-all mt-1"
                >
                  Pay {tour.price}
                </button>

                {/* Trust badges */}
                <div className="flex items-center justify-center gap-5 pt-1">
                  <div className="flex items-center gap-1.5 text-ink-soft text-xs">
                    <ShieldCheck size={13} /> SSL Encrypted
                  </div>
                  <div className="w-px h-3 bg-ink/15" />
                  <div className="flex items-center gap-1.5 text-ink-soft text-xs">
                    <Lock size={12} /> PCI DSS Compliant
                  </div>
                </div>
              </motion.form>
            )}

            {step === "processing" && (
              <motion.div
                key="processing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-14 flex flex-col items-center gap-5"
              >
                <div className="relative w-14 h-14">
                  <div className="absolute inset-0 rounded-full border-4 border-canopy/15" />
                  <div className="absolute inset-0 rounded-full border-4 border-t-canopy border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-ink">Processing payment</p>
                  <p className="text-xs text-ink-soft mt-1">Please do not close this window</p>
                </div>
              </motion.div>
            )}

            {step === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="py-8 flex flex-col items-center gap-5 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 18 }}
                  className="w-16 h-16 rounded-full bg-green-50 border border-green-100 flex items-center justify-center"
                >
                  <CheckCircle size={34} className="text-green-500" />
                </motion.div>

                <div>
                  <p className="font-display text-2xl text-ink">Payment confirmed</p>
                  <p className="text-sm text-ink-soft mt-2 leading-relaxed max-w-xs">
                    Your place on <span className="text-ink font-medium">{tour.title}</span> is reserved.
                    A confirmation has been sent to{" "}
                    <span className="text-ink font-medium">{form.email}</span>.
                  </p>
                </div>

                <div className="bg-mist-dim rounded-xl px-5 py-4 w-full text-left border border-ink/8">
                  <p className="text-xs text-ink-soft uppercase tracking-widest font-medium mb-1">
                    Booking reference
                  </p>
                  <p className="font-mono text-sm text-canopy font-semibold tracking-wider">
                    {bookingRef}
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="w-full rounded-full border border-ink/20 text-ink py-3 text-sm font-medium hover:bg-ink/5 transition-colors"
                >
                  Done
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
