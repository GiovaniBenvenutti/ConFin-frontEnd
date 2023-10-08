
export const SubClasse = {
  PATRIMONIO_BALANCO: ['DISPONIBILIDADES', "ESTOQUES", "FORNECEDORES", "PATRIMONIO", "PEÇAS_VENDIDAS"],
  SETOR_VENDAS: ["CUSTO_VARIAVEL", "FATURAMENTO"],
  SETOR_PRODUCAO: ["CUSTO_FIXO", "FOLHA", "IMP_FOLHA", "DESPESA_OPERACIONAL", "MANUTENCAO", "MATERIAL_USO_E_CONSUMO", "DESPESA_NAO_OPERACIONAL"],
  MATERIAIS_E_SERVICOS: ["SERVICOS", "MATERIAIS", "CARTAO_BNDES"],
  SETOR_FINANCEIRO: ["INVESTIMENTO", "FINANCEIRO"]  
}

export function exibeSubClasse(priescolha: string, SubClasse: { [key: string]: any }) {
  let subClasses;
  if (priescolha in SubClasse) {
    subClasses = SubClasse[priescolha];
  }
  return subClasses;
}

