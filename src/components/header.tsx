export default function Header() {
  const isAuthorized = localStorage.getItem("auth");
  //   console.log(isAuthorized);

  return (
    <section>
      <div className="container mx-auto">
        <h3 className="text-center text-[16px] uppercase">this is a header</h3>
      </div>
    </section>
  );
}
