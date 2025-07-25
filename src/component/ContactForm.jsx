"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      // Send data to your email backend API
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push("/thank-you"); // redirect after successful submission
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to submit form.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="row customForm">
      <div className="col-md-12">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          {...register("name", { required: "Name is required" })}
          type="text"
          className={`form-control ${errors.name ? 'errorField' : ''}`}
          id="name"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>

      <div className="col-md-12">
        <label htmlFor="contact" className="form-label">Contact No.</label>
        <input
          {...register("contact", {
            required: "Contact number is required",
            pattern: {
              value: /^[0-9]+$/,
              message: "Only numbers are allowed",
            },
            minLength: {
              value: 10,
              message: "Contact number must be 10 digits",
            },
          })}
          type="text"
          className={`form-control ${errors.contact ? 'errorField' : ''}`}
          id="contact"
          maxLength={12}
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 12);
          }}
        />
        {errors.contact && <p className="text-danger">{errors.contact.message}</p>}
      </div>

      <div className="col-md-12">
        <label htmlFor="email" className="form-label">Your Email</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^@]+@[^@]+\.[^@]+$/,
              message: "Invalid email address",
            },
          })}
          type="email"
          className={`form-control ${errors.email ? 'errorField' : ''}`}
          id="email"
        />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
      </div>

      <div className="col-md-12">
        <label htmlFor="query" className="form-label">Your Query</label>
        <textarea
          {...register("query", { required: "Query is required" })}
          className={`form-control ${errors.query ? 'errorField' : ''}`}
          id="query"
          rows={3}
        />
        {errors.query && <p className="text-danger">{errors.query.message}</p>}
      </div>

      <div className="col-12">
        <button type="submit" className="btn customBtn w-100">Submit</button>
      </div>
    </form>
  );
}
