import { Divider } from "@nextui-org/divider";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center justify-center gap-4 pb-20">
      <Divider className="my-4" />
      <h1>Copyright &#169; Shivesh Anand {currentYear}</h1>
    </div>
  );
}
export default Footer;
