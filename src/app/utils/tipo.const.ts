
export function exibeTipo(segescolha: string) {
  let SubTipos: any;
  if (segescolha==="DISPONIBILIDADES") {
    SubTipos = PATRIMONIO_BALANCO.DISPONIBILIDADES;    
  } else if (segescolha==="ESTOQUES") {
    SubTipos = PATRIMONIO_BALANCO.ESTOQUES;    
  } else if (segescolha==="FORNECEDORES") {
    SubTipos = PATRIMONIO_BALANCO.FORNECEDORES;    
  } else if (segescolha==="PATRIMONIO") {
    SubTipos = PATRIMONIO_BALANCO.PATRIMONIO;    
  } else if (segescolha==="PEÇAS_VENDIDAS") {
    SubTipos = PATRIMONIO_BALANCO.PEÇAS_VENDIDAS; 

  } else if (segescolha==="CUSTO_VARIAVEL") {
    SubTipos = SETOR_VENDAS.CUSTO_VARIAVEL;    
  } else if (segescolha==="FATURAMENTO") {
    SubTipos = SETOR_VENDAS.FATURAMENTO; 

  } else if (segescolha==="CUSTO_FIXO") {
    SubTipos = SETOR_PRODUCAO.CUSTO_FIXO;    
  } else if (segescolha==="FOLHA") {
    SubTipos = SETOR_PRODUCAO.FOLHA;    
  } else if (segescolha==="IMP_FOLHA") {
    SubTipos = SETOR_PRODUCAO.IMP_FOLHA;    
  } else if (segescolha==="DESPESA_OPERACIONAL") {
    SubTipos = SETOR_PRODUCAO.DESPESA_OPERACIONAL;    
  } else if (segescolha==="MANUTENCAO") {
    SubTipos = SETOR_PRODUCAO.MANUTENCAO;    
  } else if (segescolha==="MATERIAL_USO_E_CONSUMO") {
    SubTipos = SETOR_PRODUCAO.MATERIAL_USO_E_CONSUMO;    
  } else if (segescolha==="DESPESA_NAO_OPERACIONAL") {
    SubTipos = SETOR_PRODUCAO.DESPESA_NAO_OPERACIONAL;  

  } else if (segescolha==="SERVICOS") {
    SubTipos = MATERIAIS_E_SERVICOS.SERVICOS;    
  } else if (segescolha==="MATERIAIS") {
    SubTipos = MATERIAIS_E_SERVICOS.MATERIAIS;    
  } else if (segescolha==="CARTAO_BNDES") {
    SubTipos = MATERIAIS_E_SERVICOS.CARTAO_BNDES;  

  } else if (segescolha==="INVESTIMENTO") {
    SubTipos = SETOR_FINANCEIRO.INVESTIMENTO;    
  } else if (segescolha==="FINANCEIRO") {
    SubTipos = SETOR_FINANCEIRO.FINANCEIRO;    
  }
  return SubTipos;
}


// TIPOS da subclasse PATRIMONIO_BALANCO
export const PATRIMONIO_BALANCO = {
  DISPONIBILIDADES: ["CAIXA", "A RECEBER", "INVESTIMENTO", "SALDO EMPRESTIMOS"],
  ESTOQUES: ["TECELAGEM", "BENEFICIAMENTO", "MALHA", "FACÇÕES", "PEÇAS", "SALDO 1°", "SALDO 2°"],
  FORNECEDORES: ["A PAGAR", "SALDO DEVEDOR BNDES"],
  PATRIMONIO: ["IMOBILIZADO", "ENTRADA", "SAIDA"],
  PEÇAS_VENDIDAS: ["UNIDADES"]
}

// TIPOS da subclasse VENDAS
export const SETOR_VENDAS = {
  CUSTO_VARIAVEL: ["IMPOSTO VENDA", "IMPOSTO RENDA", "COMISSÕES", "FRETE SITE"],
  FATURAMENTO: ["ENTRADA", "DEVOLUÇÕES"]
}

// TIPOS da subclasse SETOR_PRODUCAO
export const SETOR_PRODUCAO = {
  CUSTO_FIXO: ["GERAL", "ADMINISTRATIVO", "DESENVOLVIMENTO", "CORTE", "COSTURA", "EMBALAGEM", "FROTA", "VENDAS"],
  FOLHA: ["ADMINISTRATIVO", "DESENVOLVIMENTO", "CORTE", "COSTURA", "EMBALAGEM", "FROTA", "VENDAS"],
  IMP_FOLHA: ["GERAL"],
  DESPESA_OPERACIONAL: ["GERAL", "ADMINISTRATIVO", "DESENVOLVIMENTO", "CORTE", "COSTURA", "EMBALAGEM", "FROTA", "VENDAS"],
  MANUTENCAO: ["GERAL", "ADMINISTRATIVO", "DESENVOLVIMENTO", "CORTE", "COSTURA", "EMBALAGEM", "FROTA", "VENDAS"],
  MATERIAL_USO_E_CONSUMO: ["GERAL", "ADMINISTRATIVO", "DESENVOLVIMENTO", "CORTE", "COSTURA", "EMBALAGEM", "FROTA", "VENDAS"],
  DESPESA_NAO_OPERACIONAL: ["GERAL", "ADMINISTRATIVO", "DESENVOLVIMENTO", "CORTE", "COSTURA", "EMBALAGEM", "FROTA", "VENDAS"]
}

// TIPOS da subclasse MATERIAIS E SERVIÇOS
export const MATERIAIS_E_SERVICOS = {
  SERVICOS: ["IMPOSTO TERCEIROS", "TECELAGEM", "BENEFICIAMENTO", "MODELISTA", "CORTE", "COSTURA", "BOTÃO", "ESTAMPARIA", "BORDADO", "EMBALAGEM"],
  MATERIAIS: ["FIO", "MALHA PRONTA", "AVIAMENTOS", "PRODUTO REVENDA", "AVIAMENTO SITE"],
  CARTAO_BNDES: ["CARTAO BNDES FIO"]
}

// TIPOS da subclasse SETOR_FINANCEIRO
export const SETOR_FINANCEIRO = {
  INVESTIMENTO: ["APLICAÇÕES", "EQUIP / SOFTWARE"],
  FINANCEIRO: ["PARCELA EMPRESTIMO", "JUROS", "IOF / TAXAS"]
}
