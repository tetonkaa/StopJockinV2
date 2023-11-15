import "./footer.css";

export default function Footer() {
  return (
    <footer class="p-4 bg-none  footerStyle md:p-8 lg:p-10 dark:bg-gray-800">
      <div class="mx-auto max-w-screen-xl text-center">
        <p class="my-6 text-white">Designed by ViceDevGroup </p>

        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Copyright © 2019 Stop Jockin - All Rights Reserved.{" "}
        </span>
      </div>
    </footer>
  );
}
