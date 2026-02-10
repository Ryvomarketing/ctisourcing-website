"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  X,
  FileText,
  MessageCircle,
  Calendar,
  ArrowLeft,
  Send,
  Loader2,
  CheckCircle,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackCTA, trackFormSubmit } from "@/lib/analytics";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ModalView = "options" | "inquiry" | "success";

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [view, setView] = useState<ModalView>("options");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    productInterest: "",
    estimatedVolume: "",
    message: "",
  });

  const hasFormData = useCallback(() => {
    return (
      formData.fullName !== "" ||
      formData.companyName !== "" ||
      formData.email !== "" ||
      formData.phone !== "" ||
      formData.productInterest !== "" ||
      formData.message !== ""
    );
  }, [formData]);

  const handleClose = useCallback(() => {
    if (view === "inquiry" && hasFormData()) {
      const confirmed = window.confirm(
        "You have unsaved form data. Are you sure you want to close?"
      );
      if (!confirmed) return;
    }
    onClose();
    // Restore focus to the element that triggered the modal
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 100);
  }, [view, hasFormData, onClose]);

  // Store the triggering element when modal opens
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
    }
  }, [isOpen]);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setView("options");
        setFormError(null);
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          productInterest: "",
          estimatedVolume: "",
          message: "",
        });
      }, 300);
    }
  }, [isOpen]);

  // Focus management
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  // Trap focus within modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement;

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send");
      }

      trackFormSubmit({
        form_type: "inquiry",
        product_interest: formData.productInterest || undefined,
        estimated_volume: formData.estimatedVolume || undefined,
        has_phone: !!formData.phone,
        has_message: !!formData.message,
      });

      setIsSubmitting(false);
      setView("success");
    } catch (err) {
      setIsSubmitting(false);
      setFormError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or contact us directly."
      );
    }
  };

  const formatPhone = (value: string): string => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length === 0) return "";
    if (digits.length <= 3) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "fullName") {
      const cleaned = value.replace(/[^a-zA-Z\s\-'.]/g, "");
      setFormData((prev) => ({ ...prev, fullName: cleaned }));
      return;
    }

    if (name === "companyName") {
      const cleaned = value.replace(/[^a-zA-Z0-9\s\-'.,&()]/g, "");
      setFormData((prev) => ({ ...prev, companyName: cleaned }));
      return;
    }

    if (name === "phone") {
      setFormData((prev) => ({ ...prev, phone: formatPhone(value) }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // WhatsApp link - replace with actual number
  const whatsappNumber = "1234567890"; // TODO: Replace with actual number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20CTI%20Sourcing%2C%20I%27m%20interested%20in%20your%20products.`;

  // Calendar link - replace with actual link
  const calendarLink = "https://cal.com/ctisourcing/consultation"; // TODO: Replace with actual Cal.com link

  const motionProps = prefersReducedMotion
    ? { initial: false, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0 } }
    : {};

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: "easeOut" }}
            className="relative w-full max-w-lg bg-black border border-gold/30 rounded-lg shadow-[0_0_60px_rgba(212,168,83,0.1)] overflow-hidden"
          >
            {/* Gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0" />

            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gold/10">
              <div className="flex items-center gap-3">
                {view !== "options" && view !== "success" && (
                  <button
                    onClick={() => setView("options")}
                    className="p-1 text-cream/80 hover:text-cream transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
                    aria-label="Go back to options"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                )}
                <h2
                  id="modal-title"
                  className="font-serif text-2xl text-cream"
                >
                  {view === "options" && "Let's Talk"}
                  {view === "inquiry" && "Send an Inquiry"}
                  {view === "success" && "Message Sent"}
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                onClick={handleClose}
                className="p-2 text-cream/80 hover:text-cream transition-colors rounded-lg hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                {/* Options View */}
                {view === "options" && (
                  <motion.div
                    key="options"
                    {...motionProps}
                    {...(!prefersReducedMotion && {
                      initial: { opacity: 0, x: -20 },
                      animate: { opacity: 1, x: 0 },
                      exit: { opacity: 0, x: 20 },
                      transition: { duration: 0.2 },
                    })}
                    className="space-y-4"
                  >
                    <p className="text-cream/80 text-sm mb-6">
                      Choose how you&apos;d like to connect with us.
                    </p>

                    {/* Inquiry Option */}
                    <button
                      onClick={() => {
                        trackCTA({ cta_location: "modal", cta_text: "Send an Inquiry", cta_action: "open_modal" });
                        setView("inquiry");
                      }}
                      className="w-full group p-5 border border-gold/30 rounded-lg hover:border-gold hover:bg-gold/5 transition-all duration-300 text-left focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-gold/10 text-gold group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                          <FileText className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-medium text-cream group-hover:text-gold transition-colors">
                            Send an Inquiry
                          </h3>
                          <p className="text-sm text-cream/70 mt-1">
                            Tell us about your needs. We&apos;ll respond within
                            24 hours.
                          </p>
                        </div>
                      </div>
                    </button>

                    {/* WhatsApp Option */}
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackCTA({ cta_location: "modal", cta_text: "Quick Question", cta_action: "external" })}
                      className="w-full group p-5 border border-gold/20 rounded-lg hover:border-gold/50 hover:bg-white/5 transition-all duration-300 text-left block focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                      aria-label="Quick Question — chat with us on WhatsApp (opens in a new tab)"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-forest/30 text-forest-light">
                          <MessageCircle className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-medium text-cream group-hover:text-cream transition-colors">
                            Quick Question
                          </h3>
                          <p className="text-sm text-cream/70 mt-1">
                            Chat with us on WhatsApp for fast answers.
                          </p>
                        </div>
                      </div>
                    </a>

                    {/* Calendar Option */}
                    <a
                      href={calendarLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackCTA({ cta_location: "modal", cta_text: "Schedule a Call", cta_action: "external" })}
                      className="w-full group p-5 border border-gold/20 rounded-lg hover:border-gold/50 hover:bg-white/5 transition-all duration-300 text-left block focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                      aria-label="Schedule a Call — book a time on Cal.com (opens in a new tab)"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-forest/30 text-forest-light">
                          <Calendar className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-medium text-cream group-hover:text-cream transition-colors">
                            Schedule a Call
                          </h3>
                          <p className="text-sm text-cream/70 mt-1">
                            Book a time that works for you.
                          </p>
                        </div>
                      </div>
                    </a>

                    {/* Direct Contact Info */}
                    <div className="mt-6 pt-6 border-t border-gold/10">
                      <p className="text-xs text-cream/70 mb-3">Or reach us directly</p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href="mailto:info@ctisourcing.com"
                          className="flex items-center gap-2 text-cream/80 hover:text-gold text-sm transition-colors"
                        >
                          <Mail className="w-4 h-4" aria-hidden="true" />
                          info@ctisourcing.com
                        </a>
                        <a
                          href="tel:+1234567890"
                          className="flex items-center gap-2 text-cream/80 hover:text-gold text-sm transition-colors"
                        >
                          <Phone className="w-4 h-4" aria-hidden="true" />
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Inquiry Form View */}
                {view === "inquiry" && (
                  <motion.form
                    key="inquiry"
                    {...motionProps}
                    {...(!prefersReducedMotion && {
                      initial: { opacity: 0, x: 20 },
                      animate: { opacity: 1, x: 0 },
                      exit: { opacity: 0, x: -20 },
                      transition: { duration: 0.2 },
                    })}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    {/* Error banner */}
                    {formError && (
                      <div
                        role="alert"
                        className="p-3 bg-red-900/30 border border-red-500/50 rounded-lg text-red-300 text-sm"
                      >
                        {formError}
                      </div>
                    )}

                    {/* Status announcements for screen readers */}
                    <div aria-live="polite" aria-atomic="true" className="sr-only">
                      {isSubmitting && "Sending your request..."}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-cream/90">
                          Full Name <span aria-hidden="true" className="text-gold">*</span>
                        </Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          aria-required="true"
                          maxLength={100}
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="bg-white/5 border-gold/20 text-cream placeholder:text-cream/40 focus:border-gold"
                          placeholder="John Smith"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="companyName" className="text-cream/90">
                          Company Name <span aria-hidden="true" className="text-gold">*</span>
                        </Label>
                        <Input
                          id="companyName"
                          name="companyName"
                          type="text"
                          required
                          aria-required="true"
                          maxLength={100}
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className="bg-white/5 border-gold/20 text-cream placeholder:text-cream/40 focus:border-gold"
                          placeholder="Acme Corp"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-cream/90">
                          Email <span aria-hidden="true" className="text-gold">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          aria-required="true"
                          maxLength={200}
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-white/5 border-gold/20 text-cream placeholder:text-cream/40 focus:border-gold"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-cream/90">
                          Phone <span className="text-cream/60">(optional)</span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="bg-white/5 border-gold/20 text-cream placeholder:text-cream/40 focus:border-gold"
                          placeholder="(555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="productInterest" className="text-cream/90">
                          Product Interest <span aria-hidden="true" className="text-gold">*</span>
                        </Label>
                        <Select
                          value={formData.productInterest}
                          onValueChange={(value) =>
                            setFormData((prev) => ({
                              ...prev,
                              productInterest: value,
                            }))
                          }
                          required
                          aria-required="true"
                        >
                          <SelectTrigger
                            className="bg-white/5 border-gold/20 text-cream focus:border-gold"
                            aria-label="Product Interest"
                          >
                            <SelectValue placeholder="Select product" />
                          </SelectTrigger>
                          <SelectContent className="bg-black border-gold/20 z-[200]">
                            <SelectItem value="beeswax">
                              Beeswax
                            </SelectItem>
                            <SelectItem value="honey">
                              Honey
                            </SelectItem>
                            <SelectItem value="both">
                              Both Products
                            </SelectItem>
                            <SelectItem value="other">
                              Other / Not Sure
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="estimatedVolume" className="text-cream/90">
                          Estimated Volume
                        </Label>
                        <Select
                          value={formData.estimatedVolume}
                          onValueChange={(value) =>
                            setFormData((prev) => ({
                              ...prev,
                              estimatedVolume: value,
                            }))
                          }
                        >
                          <SelectTrigger
                            className="bg-white/5 border-gold/20 text-cream focus:border-gold"
                            aria-label="Estimated Volume"
                          >
                            <SelectValue placeholder="Select volume" />
                          </SelectTrigger>
                          <SelectContent className="bg-black border-gold/20 z-[200]">
                            <SelectItem value="under-500kg">Under 500kg</SelectItem>
                            <SelectItem value="500kg-1mt">500kg - 1 MT</SelectItem>
                            <SelectItem value="1mt-5mt">1 - 5 MT</SelectItem>
                            <SelectItem value="over-5mt">Over 5 MT</SelectItem>
                            <SelectItem value="not-sure">Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-cream/90">
                        Message / Requirements
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        maxLength={2000}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-white/5 border-gold/20 text-cream placeholder:text-cream/40 focus:border-gold min-h-[100px] resize-none"
                        placeholder="Tell us about your specific needs, timeline, or any questions..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold hover:bg-gold-light text-black font-medium py-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,168,83,0.3)] disabled:opacity-50"
                      aria-busy={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                          Send Request
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}

                {/* Success View */}
                {view === "success" && (
                  <motion.div
                    key="success"
                    {...motionProps}
                    {...(!prefersReducedMotion && {
                      initial: { opacity: 0, scale: 0.95 },
                      animate: { opacity: 1, scale: 1 },
                      exit: { opacity: 0, scale: 0.95 },
                      transition: { duration: 0.3 },
                    })}
                    className="text-center py-8"
                    role="status"
                    aria-live="polite"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-forest/20 text-forest-light mb-6">
                      <CheckCircle className="w-8 h-8" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-xl text-cream mb-3">
                      Thank You!
                    </h3>
                    <p className="text-cream/80 mb-6">
                      We&apos;ve received your request and will get back to you
                      within 24 hours.
                    </p>
                    <Button
                      onClick={handleClose}
                      className="bg-gold hover:bg-gold-light text-black font-medium px-8"
                    >
                      Close
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
