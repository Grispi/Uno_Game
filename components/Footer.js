import React, { Fragment, useState } from "react";
import Anchor from "~/components/Anchor";
import Container from "~/components/Container";
import useTranslation from "next-translate/useTranslation";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="w-full h-12 bg-white px-4 py-2">
      <Container size="large">
        <div className="flex h-12 items-center justify-between">
          <p>
            <span>{t("common:made-by")} </span>
            <Anchor href="https://twitter.com/griselmelina">
              Grisel Alpañes
            </Anchor>
          </p>
        </div>
      </Container>
    </footer>
  );
}
