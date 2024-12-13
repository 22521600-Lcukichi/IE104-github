"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import LogoSearch from '../public/assert/btn-search.png'
const SearchBar = ({ placeholder }: { placeholder: string }) => {

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if(name){
      router.push(`/list?name=${name}`)
    }
  };

  return (
    <form
      className="flex items-center justify-between gap-4 bg-blue-950 p-2 rounded-md flex-1 w-full max-w-md"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder={ placeholder }
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <Image src={LogoSearch} alt=""  />
      </button>
    </form>
  );
};

export default SearchBar;
