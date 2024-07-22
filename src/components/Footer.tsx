import footer from "@/public/static/footer.png";
import logoPC from "@/public/static/logo-pc.png";
import Image from "next/image";
import Link from "next/link";
import { tags } from "../constants";

export default function Footer() {
  return (
    <div className="w-screen">
      <div className="w-full h-[5px] bg-orange" />
      <div className="w-screen min-h-[100px] px-2 xl:px-40 py-4 space-y-8 lg:space-y-0 grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Link href="/truyenqq">
            <Image
              unoptimized
              priority={true}
              src={logoPC}
              width={150}
              height={150}
              alt="logoPC"
              className="object-cover object-center w-[150px] h-auto"
            />
          </Link>
          <div>
            <Image
              unoptimized
              priority={true}
              src={footer}
              width={350}
              height={150}
              alt="fanpage"
              className="object-cover object-center w-[350px] h-auto"
            />
          </div>
        </div>

        <div className="flex flex-col items-start space-y-4">
          <div className="flex flex-wrap gap-2 ">
            {tags.map((tag, index) => {
              return (
                <Link
                  href="/"
                  className="bg-grey p-2 text-xs hover:bg-black/[0.2]"
                  key={index}
                >
                  {tag}
                </Link>
              );
            })}
          </div>
          <div>
            <div>Email: luanvovan2911@gmail.com</div>
            <Link href="/truyenqq/privacy-policy">Chính sách bảo mật</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
