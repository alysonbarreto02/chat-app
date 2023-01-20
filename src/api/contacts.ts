import { geradorNome, geradorNomeMasculino } from "gerador-nome";

function phone() {
  const rnd = (n: number) => Math.round(Math.random() * n);
  const n = Array(11)
    .fill("")
    .map(() => rnd(9));
  return n.join("");
}

export const contacts = [
  { name: geradorNome() + " " + geradorNomeMasculino(), phone: phone() },
  { name: geradorNome() + " " + geradorNomeMasculino(), phone: phone() },
  { name: geradorNome() + " " + geradorNomeMasculino(), phone: phone() },
  { name: geradorNome() + " " + geradorNomeMasculino(), phone: phone() },
  { name: geradorNome() + " " + geradorNomeMasculino(), phone: phone() },
  { name: geradorNome() + " " + geradorNomeMasculino(), phone: phone() },
  { name: geradorNome() + " " + geradorNomeMasculino(), phone: phone() },
  { name: geradorNome() + " " + geradorNomeMasculino(), phone: phone() },
  { name: geradorNome() + " " + geradorNomeMasculino(), phone: phone() },
];
