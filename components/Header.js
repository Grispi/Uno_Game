// import Link from "next/link";
import Link from "next-translate/Link";
import Heading from "~/components/Heading";
import Container from "~/components/Container";
import Modal from "~/components/Modal";
import React, { useState } from "react";
import Rules from "~/components/Rules";
import useTranslation from "next-translate/useTranslation";
import { allLanguages } from "~/i18n.json";
import Select from "~/components/Select";
import { useRouter } from "next/router";
import Router from "next-translate/Router";

export default function Header() {
  const { t, lang } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const languages = allLanguages.map((l) => ({
    id: l,
    name: t(`common:language-${l}`),
  }));

  const onLanguageChange = (l) => {
    const slash = "/";
    const url =
      "/" +
      router.asPath
        .split(slash)
        .filter((p) => p && !allLanguages.includes(p))
        .join(slash);

    return Router.replaceI18n({
      url: url || slash,
      options: {
        lang: l,
      },
    });
  };

  /*
    By default, next-translate adds the default language (es) to the URL
    and we want to avoid that only in the home page
  */
  // const href = router.asPath === "/" ? "/" : `/${lang}`;

  return (
    <header className="w-full h-12 bg-white px-4 py-2">
      <Container size="large">
        <div className="flex items-center justify-between">
          <Heading type="h1">
            <Link href="/">
              <span className="cursor-pointer duration-150 ease-in-out focus:outline-none focus:shadow-outline outline-none transition">
                UNO
              </span>
            </Link>
          </Heading>

          <div className="flex items-center justify-end">
            <Link href="/">
              <a className="text-gray-700 text-center text-sm sm:text-base px-2 md:px-4 m-0 md:m-2 ">
                {t("common:new-game")}
              </a>
            </Link>
            <button
              id="rules"
              className="focus:outline-none focus:shadow-outline text-gray-700 text-center text-sm sm:text-base px-2 md:px-4 m-0 md:m-2 "
              onClick={() => {
                setShowModal(true);
              }}
            >
              <span> {t("common:rules")}</span>
            </button>
            <Modal
              className="modal"
              contentLabel="Rules"
              id="modal-rules"
              isOpen={showModal}
              onRequestClose={() => {
                setShowModal(false);
              }}
              overlayClassName="overlay"
              title={t("common:rules-modal.title")}
            >
              <Rules />
            </Modal>

            <Select
              id="language"
              onChange={onLanguageChange}
              options={languages}
              value={lang}
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
