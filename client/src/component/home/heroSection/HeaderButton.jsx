import { useState } from "react";
import { Buttongroup, QuoteBotton } from "./HeroStyle";
import Modal from "../../../ui/Modal";
import GetQuote from "../../../ui/GetQuote";

function HeaderButton() {
  return (
    <Modal>
      <Modal.Open open="quote">
        <Buttongroup>
          <QuoteBotton type="quote">Get Quote</QuoteBotton>
        </Buttongroup>
      </Modal.Open>
      <Modal.Window open="quote">
        <GetQuote />
      </Modal.Window>
    </Modal>
  );
}
export default HeaderButton;
