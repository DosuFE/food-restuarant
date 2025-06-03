import SubscriptionForm from "./subscriptionForm";

export default function Subscription() {
  return (
    <div className="text-center flex flex-col items-center justify-center ">
      <h1 className="py-5 text-4xl font-semibold text-black/85 md:pt-12 md:text-5xl">
        Deliciousness to your inbox
      </h1>
      <p className=" text-black/65 pb-6 lg:max-w-1/2">
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqut enim ad minim
      </p>
      <SubscriptionForm />
    </div>
  );
}
