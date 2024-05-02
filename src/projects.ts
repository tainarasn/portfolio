import { Project } from "./types/project"
import easyUni from "../src/assets/folders/easyUni.png"
import ipend from "../src/assets/folders/ipend.png"
import calcage from "../src/assets/folders/calcage.png"
import conselhiza from "../src/assets/folders/conselhiza.png"
import password from "../src/assets/folders/password.png"
import wis from "../src/assets/folders/wis.png"

const projetos: Project[] = [
    {
        id: 1,
        name: "EasyUni",
        cover: easyUni,
        description: "Sistema de gerenciamento de disciplinas Acadêmicas para o curso de Engenharia de Computação da UTFPR.",
        location: "https://easyuni.tainovaes.dev",
    },
    {
        id: 2,
        name: "WiS - Women In Science",
        cover: wis,
        description: "Website desnevolvido para o evento Internacional Woman In Science, sediado na UTFPR - Curitiba.",
        location: "https://utfpr.curitiba.br/mulheresnasteam/",
    },
    {
        id: 3,
        name: "GenPassword",
        cover: password,
        description: "Gerador de senhas fortes e seguras.",
        location: "https://password.tainovaes.dev",
    },
    {
        id: 4,
        name: "Ipend",
        cover: ipend,
        description: "Buscador de endereços de IP público.",
        location: "https://ipend.tainovaes.dev",
    },
    {
        id: 5,
        name: "Calcage",
        cover: calcage,
        description: "Calculadora de Idade. Desafio By Frontend Mentor.",
        location: "https://calcage.tainovaes.dev",
    },
    {
        id: 6,
        name: "Conselhiza",
        cover: conselhiza,
        description: "Gerador de conselhos consumindo api externa.",
        location: "https://conselhiza.tainovaes.dev",
    },
    {
        id: 7,
        name: "Pokedéx",
        cover: "caminho/para/a/imagem3.jpg",
        description: "Cards de pokemons desenvolvido no evento Dev em Dobro.",
        location: "/project/pokedex",
    },
    {
        id: 8,
        name: "MiniBio",
        cover: "caminho/para/a/imagem3.jpg",
        description: "Card de currículo desenvolvido no evento Dev em Dobro.",
        location: "/project/minibio",
    },
]
export default projetos
