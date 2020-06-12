import Link from "next/link";
import Heading from "~/components/Heading";
import Container from "~/components/Container";
import Modal from "~/components/Modal";
import React, { useState } from "react";
import Rules from "~/components/Rules";
export default function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <header className="w-full h-12 bg-white px-4 py-2">
      <Container size="large">
        <div className="flex items-center justify-between">
          <Heading type="h1">
            <Link href="/">
              <span className="duration-150 ease-in-out focus:outline-none focus:shadow-outline outline-none transition">
                UNO
              </span>
            </Link>
          </Heading>

          <div className="flex justify-end">
            <Link href="/">
              <a className="text-gray-700 text-center px-4 m-2">New game</a>
            </Link>
            <button
              id="rules"
              className="focus:outline-none focus:shadow-outline text-gray-700 text-center px-4 m-2"
              onClick={() => {
                setShowModal(true);
              }}
            >
              <span>Reglas</span>
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
              title="UNO - Cómo se juega"
            >
              <Rules />
            </Modal>
          </div>
        </div>
      </Container>
    </header>
  );
}
