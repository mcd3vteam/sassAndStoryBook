/* eslint-disable no-unused-vars */
import "./styles/index.scss";
import { setupAnimations } from "./utils/shared/animation/setup";
import { initModal } from "./utils/shared/Modal";

window.ucsdh = {};
setupAnimations();
initModal();
const atoms = import.meta.globEager("./atoms/**/*.js");
const molecules = import.meta.globEager("./molecules/**/*.js");
const organisms = import.meta.globEager("./organisms/**/*.js");
