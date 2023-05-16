import Image from "next/image";

export default function GoogleLogin(props) {
  return (
    <div className="px-4 py-2">
      <div className="flex gap-2 items-center justify-start">
        <div className="p-3 mr-2 rounded-full bg-gray-100">
          <Image
            src="/images/google.png"
            width={20}
            height={20}
            alt="Google icon"
          />
        </div>
        <div>
          <p className="text-base font-medium leading-tight text-neutral-800 text-left">
            Connect Google Account
          </p>
          <p className="text-sm text-neutral-500 text-left">
            Please connect google account to this block
          </p>
        </div>
      </div>
      <button
        onClick={() => props.setCurrentShow("FlowNodeImport")}
        className="rounded-md bg-blue-500 px-4 py-[0.35rem] mt-3 text-white font-medium"
      >
        Connect
      </button>
    </div>
  );
}
