import React from "react";

const InfoPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 md:px-12 py-16">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* About Section */}
        <section id="about" className="space-y-4">
          <h1 className="text-3xl font-bold text-primary font-sans">About FitNova</h1>
          <p className="text-[20px] font-sans text-muted-foreground">
            FitNova is your intelligent fitness assistant. We provide AI-powered workout
            and diet plans personalized to your body, goals, and lifestyle.
          </p>
        </section>

        {/* Blog Section */}
        <section id="blog" className="space-y-4">
          <h2 className="text-2xl font-bold text-primary font-sans">Blog</h2>
          <p className="text-[20px] font-sans text-muted-foreground">
            Stay tuned for fitness tips, industry news, and updates from our expert
            trainers and nutritionists.
          </p>
        </section>

        {/* Terms Section */}
        <section id="terms" className="space-y-4">
          <h2 className="text-2xl font-bold text-primary font-sans">Terms of Service</h2>
          <p className="text-[20px] font-sans text-muted-foreground">
            By using FitNova, you agree to our terms and conditions. We value your privacy
            and ensure a safe and respectful experience for all users.
          </p>
        </section>

        {/* Privacy Section */}
        <section id="privacy" className="space-y-4">
          <h2 className="text-2xl font-bold text-primary font-sans">Privacy Policy</h2>
          <p className="text-[20px] font-sans text-muted-foreground">
            Your personal information is safe with us. We do not share your data without
            consent and only use it to improve your experience.
          </p>
        </section>

        {/* Help Section */}
        <section id="help" className="space-y-4">
          <h2 className="text-2xl font-bold text-primary font-sans">Help & Support</h2>
          <p className="text-[20px] font-sans text-muted-foreground">
            Need help navigating FitNova or facing an issue? Visit our FAQ page or reach out via email. We're committed to supporting your fitness journey.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-4">
          <h2 className="text-2xl font-bold text-primary font-sans">Contact Us</h2>
          <p className="text-[20px] font-sans text-muted-foreground">
            Have questions or feedback? Email us at{" "}
            <a href="mailto:izoomie03@gmail.com" className="text-primary underline">
              izoomie03@gmail.com
            </a>
            , and we’ll get back to you as soon as possible.
          </p>
        </section>
      </div>
    </div>
  );
};

export default InfoPage;
