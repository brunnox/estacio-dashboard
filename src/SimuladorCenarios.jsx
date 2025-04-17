import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const SimuladorCenarios = () => {
  // Dados completos dos polos com captação, renovação e evasão
  const polosData = [
    { 
      id: 1, name: 'AUTONOMISTAS', 
      // Captação
      realizado242: 87, metaPrata251: 259, metaDiamante251: 316, metaPrata252: 103, metaDiamante252: 126, taxaConversao: 45.2, realizado251: 258,
      // Renovação
      renovRealizado251: 265, renovMeta251: 266, renovBase252: 108, renovMeta252: 70, renovRealizado242: 57, renovMeta242: 64,
      // Evasão
      evasaoRealizado251: 21, evasaoMeta251: 20, evasaoRealizado242: 20, evasaoMeta242: 15
    },
    { 
      id: 2, name: 'AV. MORUMBI', 
      realizado242: 42, metaPrata251: 122, metaDiamante251: 157, metaPrata252: 49, metaDiamante252: 67, taxaConversao: 31.8, realizado251: 70,
      renovRealizado251: 130, renovMeta251: 123, renovBase252: 42, renovMeta252: 29, renovRealizado242: 35, renovMeta242: 34,
      evasaoRealizado251: 10, evasaoMeta251: 13, evasaoRealizado242: 14, evasaoMeta242: 7
    },
    { 
      id: 3, name: 'BARRA FUNDA', 
      realizado242: 86, metaPrata251: 288, metaDiamante251: 352, metaPrata252: 115, metaDiamante252: 140, taxaConversao: 36.4, realizado251: 223,
      renovRealizado251: 335, renovMeta251: 323, renovBase252: 165, renovMeta252: 122, renovRealizado242: 178, renovMeta242: 174,
      evasaoRealizado251: 27, evasaoMeta251: 22, evasaoRealizado242: 20, evasaoMeta242: 27
    },
    { 
      id: 4, name: 'BUTANTÃ', 
      realizado242: 116, metaPrata251: 203, metaDiamante251: 248, metaPrata252: 81, metaDiamante252: 101, taxaConversao: 40.8, realizado251: 200,
      renovRealizado251: 269, renovMeta251: 255, renovBase252: 105, renovMeta252: 73, renovRealizado242: 82, renovMeta242: 83,
      evasaoRealizado251: 14, evasaoMeta251: 18, evasaoRealizado242: 10, evasaoMeta242: 25
    },
    { 
      id: 5, name: 'CENTRO - OSASCO', 
      realizado242: 229, metaPrata251: 679, metaDiamante251: 860, metaPrata252: 270, metaDiamante252: 312, taxaConversao: 43.3, realizado251: 505,
      renovRealizado251: 698, renovMeta251: 731, renovBase252: 341, renovMeta252: 243, renovRealizado242: 263, renovMeta242: 253,
      evasaoRealizado251: 44, evasaoMeta251: 64, evasaoRealizado242: 36, evasaoMeta242: 45
    },
    { 
      id: 6, name: 'CENTRO - POUSO ALEGRE', 
      realizado242: 71, metaPrata251: 175, metaDiamante251: 215, metaPrata252: 69, metaDiamante252: 91, taxaConversao: 35.4, realizado251: 154,
      renovRealizado251: 225, renovMeta251: 227, renovBase252: 102, renovMeta252: 76, renovRealizado242: 85, renovMeta242: 83,
      evasaoRealizado251: 18, evasaoMeta251: 13, evasaoRealizado242: 12, evasaoMeta242: 10
    },
    { 
      id: 10, name: 'DALPLAZA CENTER', 
      realizado242: 44, metaPrata251: 109, metaDiamante251: 143, metaPrata252: 43, metaDiamante252: 59, taxaConversao: 39.0, realizado251: 94,
      renovRealizado251: 115, renovMeta251: 119, renovBase252: 73, renovMeta252: 51, renovRealizado242: 47, renovMeta242: 54,
      evasaoRealizado251: 9, evasaoMeta251: 9, evasaoRealizado242: 5, evasaoMeta242: 12
    },
    { 
      id: 11, name: 'FREGUESIA DO Ó', 
      realizado242: 32, metaPrata251: 136, metaDiamante251: 175, metaPrata252: 54, metaDiamante252: 74, taxaConversao: 42.8, realizado251: 122,
      renovRealizado251: 118, renovMeta251: 117, renovBase252: 48, renovMeta252: 31, renovRealizado242: 32, renovMeta242: 32,
      evasaoRealizado251: 8, evasaoMeta251: 10, evasaoRealizado242: 10, evasaoMeta242: 12
    },
    { 
      id: 12, name: 'METRÔ MORUMBI', 
      realizado242: 70, metaPrata251: 181, metaDiamante251: 222, metaPrata252: 72, metaDiamante252: 94, taxaConversao: 41.3, realizado251: 118,
      renovRealizado251: 214, renovMeta251: 218, renovBase252: 92, renovMeta252: 61, renovRealizado242: 55, renovMeta242: 52,
      evasaoRealizado251: 19, evasaoMeta251: 16, evasaoRealizado242: 13, evasaoMeta242: 15
    },
    { 
      id: 13, name: 'SÃO FRANCISCO III', 
      realizado242: 11, metaPrata251: 52, metaDiamante251: 90, metaPrata252: 24, metaDiamante252: 37, taxaConversao: 40.2, realizado251: 35,
      renovRealizado251: 26, renovMeta251: 28, renovBase252: 17, renovMeta252: 11, renovRealizado242: 6, renovMeta242: 7,
      evasaoRealizado251: 2, evasaoMeta251: 2, evasaoRealizado242: 4, evasaoMeta242: 2
    },
    { 
      id: 14, name: 'SHOP CENTER LAPA', 
      realizado242: 47, metaPrata251: 160, metaDiamante251: 197, metaPrata252: 64, metaDiamante252: 83, taxaConversao: 37.6, realizado251: 128,
      renovRealizado251: 183, renovMeta251: 183, renovBase252: 80, renovMeta252: 57, renovRealizado242: 57, renovMeta242: 62,
      evasaoRealizado251: 12, evasaoMeta251: 12, evasaoRealizado242: 11, evasaoMeta242: 11
    },
    { 
      id: 15, name: 'SHOP IMPERIAL', 
      realizado242: 17, metaPrata251: 83, metaDiamante251: 112, metaPrata252: 33, metaDiamante252: 50, taxaConversao: 36.4, realizado251: 47,
      renovRealizado251: 64, renovMeta251: 60, renovBase252: 37, renovMeta252: 28, renovRealizado242: 39, renovMeta242: 31,
      evasaoRealizado251: 3, evasaoMeta251: 6, evasaoRealizado242: 3, evasaoMeta242: 6
    },
    { 
      id: 16, name: 'SHOP NEBLINA', 
      realizado242: 10, metaPrata251: 40, metaDiamante251: 58, metaPrata252: 20, metaDiamante252: 28, taxaConversao: 44.4, realizado251: 20,
      renovRealizado251: 22, renovMeta251: 20, renovBase252: 12, renovMeta252: 9, renovRealizado242: 8, renovMeta242: 7,
      evasaoRealizado251: 1, evasaoMeta251: 3, evasaoRealizado242: 0, evasaoMeta242: 1
    },
    { 
      id: 17, name: 'VILA REMÉDIOS', 
      realizado242: 64, metaPrata251: 149, metaDiamante251: 179, metaPrata252: 59, metaDiamante252: 73, taxaConversao: 42.7, realizado251: 93,
      renovRealizado251: 166, renovMeta251: 168, renovBase252: 68, renovMeta252: 48, renovRealizado242: 31, renovMeta242: 28,
      evasaoRealizado251: 8, evasaoMeta251: 13, evasaoRealizado242: 7, evasaoMeta242: 8
    },
    { 
      id: 18, name: 'VILA ROMANA', 
      realizado242: 34, metaPrata251: 96, metaDiamante251: 124, metaPrata252: 38, metaDiamante252: 52, taxaConversao: 35.7, realizado251: 87,
      renovRealizado251: 85, renovMeta251: 85, renovBase252: 53, renovMeta252: 34, renovRealizado242: 24, renovMeta242: 28,
      evasaoRealizado251: 8, evasaoMeta251: 8, evasaoRealizado242: 4, evasaoMeta242: 4
    }
  ];

  // Estimativa padrão da meta de evasão de 25.2 (como não temos os valores, usaremos a mesma de 25.1)
  // Coeficiente de ajuste para a evasão de 25.2 (pode ser modificado conforme necessário)
  const [evasaoCoef, setEvasaoCoef] = useState(1.0);

  // Estado inicial para atingimento por polo
  const [atingimentoPolo, setAtingimentoPolo] = useState(
    polosData.map(polo => ({
      ...polo,
      // Valores iniciais para captação
      atingimentoPrata: 95, // valor padrão de 95%
      matriculasProjetadas: Math.round(polo.metaPrata252 * 0.95),
      classificadosNecessarios: Math.round((polo.metaPrata252 * 0.95) / (polo.taxaConversao / 100)),
      
      // Valores iniciais para renovação
      renovPercent: 80, // percentual padrão de atingimento da renovação
      renovProjetado: Math.round(polo.renovMeta252 * 0.8),
      
      // Valores iniciais para evasão (estimando meta de evasão de 25.2 como igual à de 25.1)
      evasaoMeta252: Math.round(polo.evasaoMeta251 * evasaoCoef),
      evasaoPercent: 90, // percentual padrão de evasão (menor é melhor)
      evasaoProjetado: Math.round(polo.evasaoMeta251 * evasaoCoef * 0.9)
    }))
  );

  // Estados para cenários
  const [cenarioGlobal, setCenarioGlobal] = useState(95);
  const [cenarioRenovacao, setCenarioRenovacao] = useState(80);
  const [cenarioEvasao, setCenarioEvasao] = useState(90);
  const [melhoriaConversao, setMelhoriaConversao] = useState(0);

  // Estado para resultados da simulação
  const [resultado, setResultado] = useState({
    captacaoProjetada: 0,
    renovacaoProjetada: 0,
    evasaoProjetada: 0,
    totalLiquidoProjetado: 0,
    polosComRepasseDiamante: 0,
    polosComRepassePrata: 0,
    totalRealizado242: 0
  });

  // Função para calcular o repasse por polo (considerando os três pilares)
  const calcularRepassePolo = (polo, matriculasCaptacaoProjetadas, renovacaoProjetada, evasaoProjetada) => {
    // Resultados reais de 25.1 para os três pilares
    const captacao251 = polo.realizado251;
    const renovacao251 = polo.renovRealizado251;
    const evasao251 = polo.evasaoRealizado251;
    
    // Projeções para 25.2
    const captacao252 = matriculasCaptacaoProjetadas;
    const renovacao252 = renovacaoProjetada;
    const evasao252 = evasaoProjetada;
    
    // Total líquido realizado + projetado
    const totalRealizado = captacao251 + renovacao251 - evasao251;
    const totalProjetado = captacao252 + renovacao252 - evasao252;
    const totalLiquido = totalRealizado + totalProjetado;
    
    // Metas para os três pilares
    // Captação tem meta prata e diamante diferentes
    const metaCaptacaoPrata = polo.metaPrata251 + polo.metaPrata252;
    const metaCaptacaoDiamante = polo.metaDiamante251 + polo.metaDiamante252;
    
    // Renovação e evasão têm a mesma meta para prata e diamante
    const metaRenovacao = polo.renovMeta251 + polo.renovMeta252;
    const metaEvasao = polo.evasaoMeta251 + (polo.evasaoMeta251 * evasaoCoef); // Estimativa para 25.2
    
    // Meta total prata e diamante
    const metaTotalPrata = metaCaptacaoPrata + metaRenovacao - metaEvasao;
    const metaTotalDiamante = metaCaptacaoDiamante + metaRenovacao - metaEvasao;
    
    // Verificar percentual de atingimento para determinar repasse
    const percentualAtingimentoPrata = (totalLiquido / metaTotalPrata) * 100;
    const percentualAtingimentoDiamante = (totalLiquido / metaTotalDiamante) * 100;
    
    // Definir repasse com base no atingimento
    if (percentualAtingimentoPrata >= 100 && percentualAtingimentoDiamante >= 85) {
      return 35; // Repasse Diamante
    } else if (percentualAtingimentoPrata >= 100) {
      return 25; // Repasse Prata
    } else {
      return 0; // Sem repasse
    }
  };

  // Recalcular quando houver mudanças nos cenários
  useEffect(() => {
    // Atualizar atingimento por polo baseado nos cenários
    const novosAtingimentos = polosData.map(polo => {
      // Ajustar taxa de conversão para captação
      const taxaConversaoAjustada = polo.taxaConversao * (1 + melhoriaConversao / 100);
      
      // Calcular projeções para captação
      const atingimentoPrata = cenarioGlobal;
      const matriculasProjetadas = Math.round(polo.metaPrata252 * (atingimentoPrata / 100));
      const classificadosNecessarios = Math.round(matriculasProjetadas / (taxaConversaoAjustada / 100));
      
      // Calcular projeções para renovação
      const renovPercent = cenarioRenovacao;
      const renovProjetado = Math.round(polo.renovMeta252 * (renovPercent / 100));
      
      // Calcular projeções para evasão (menor é melhor)
      // cenarioEvasao de 100% significa atingir exatamente a meta de evasão
      // cenarioEvasao de 90% significa 10% menos evasão que a meta (positivo)
      // cenarioEvasao de 110% significa 10% mais evasão que a meta (negativo)
      const evasaoPercent = cenarioEvasao;
      const evasaoMeta252 = Math.round(polo.evasaoMeta251 * evasaoCoef);
      const evasaoProjetado = Math.round(evasaoMeta252 * (evasaoPercent / 100));
      
      // Calcular o repasse com base nos três pilares
      const repasse = calcularRepassePolo(polo, matriculasProjetadas, renovProjetado, evasaoProjetado);
      
      // Calcular o total líquido para 25.1 (realizado)
      const totalLiquido251 = polo.realizado251 + polo.renovRealizado251 - polo.evasaoRealizado251;
      
      // Calcular o total líquido projetado para 25.2
      const totalLiquido252 = matriculasProjetadas + renovProjetado - evasaoProjetado;
      
      // Calcular o total líquido geral (25.1 + 25.2)
      const totalLiquidoGeral = totalLiquido251 + totalLiquido252;
      
      // Calcular o total das metas para 25.1 + 25.2
      const totalMetaPrata = (polo.metaPrata251 + polo.metaPrata252) + (polo.renovMeta251 + polo.renovMeta252) - (polo.evasaoMeta251 + evasaoMeta252);
      const totalMetaDiamante = (polo.metaDiamante251 + polo.metaDiamante252) + (polo.renovMeta251 + polo.renovMeta252) - (polo.evasaoMeta251 + evasaoMeta252);
      
      // Calcular os percentuais de atingimento
      const percentualAtingimentoPrataTotal = (totalLiquidoGeral / totalMetaPrata) * 100;
      const percentualAtingimentoDiamanteTotal = (totalLiquidoGeral / totalMetaDiamante) * 100;

      return {
        ...polo,
        atingimentoPrata,
        matriculasProjetadas,
        classificadosNecessarios,
        taxaConversaoAjustada,
        renovPercent,
        renovProjetado,
        evasaoPercent,
        evasaoProjetado,
        evasaoMeta252,
        repasse,
        totalLiquido251,
        totalLiquido252,
        totalLiquidoGeral,
        totalMetaPrata,
        totalMetaDiamante,
        percentualAtingimentoPrataTotal: percentualAtingimentoPrataTotal.toFixed(1),
        percentualAtingimentoDiamanteTotal: percentualAtingimentoDiamanteTotal.toFixed(1)
      };
    });

    setAtingimentoPolo(novosAtingimentos);

    // Calcular resultados totais
    const captacaoProjetada = novosAtingimentos.reduce((sum, polo) => sum + polo.matriculasProjetadas, 0);
    const renovacaoProjetada = novosAtingimentos.reduce((sum, polo) => sum + polo.renovProjetado, 0);
    const evasaoProjetada = novosAtingimentos.reduce((sum, polo) => sum + polo.evasaoProjetado, 0);
    const totalLiquidoProjetado = captacaoProjetada + renovacaoProjetada - evasaoProjetada;
    
    const totalRealizado242 = novosAtingimentos.reduce((sum, polo) => sum + polo.realizado242, 0);
    const polosComRepasseDiamante = novosAtingimentos.filter(polo => polo.repasse === 35).length;
    const polosComRepassePrata = novosAtingimentos.filter(polo => polo.repasse === 25).length;

    setResultado({
      captacaoProjetada,
      renovacaoProjetada,
      evasaoProjetada,
      totalLiquidoProjetado,
      polosComRepasseDiamante,
      polosComRepassePrata,
      totalRealizado242
    });
  }, [cenarioGlobal, cenarioRenovacao, cenarioEvasao, melhoriaConversao, evasaoCoef]);

  // Dados para gráfico de barras comparativo
  const dadosGrafico = atingimentoPolo.map(polo => ({
    name: polo.name,
    Captacao251: polo.realizado251,
    Renovacao251: polo.renovRealizado251,
    Evasao251: -polo.evasaoRealizado251,
    CaptacaoProj252: polo.matriculasProjetadas,
    RenovacaoProj252: polo.renovProjetado,
    EvasaoProj252: -polo.evasaoProjetado,
    MetaPrata: polo.metaPrata252
  })).slice(0, 9); // Limitando para melhor visualização

  // Dados para gráfico de tipo de repasse
  const dadosRepasse = [
    { name: "Repasse Diamante (35%)", value: polosData.length > 0 ? (resultado.polosComRepasseDiamante / polosData.length) * 100 : 0 },
    { name: "Repasse Prata (25%)", value: polosData.length > 0 ? (resultado.polosComRepassePrata / polosData.length) * 100 : 0 },
    { name: "Sem Repasse", value: polosData.length > 0 ? ((polosData.length - resultado.polosComRepasseDiamante - resultado.polosComRepassePrata) / polosData.length) * 100 : 0 }
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ff8042'];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Simulador de Cenários - Metas Estácio 25.2</h1>
      
      <div className="bg-blue-50 p-4 mb-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Como funciona o atingimento de metas</h2>
        <p className="text-sm">
          O atingimento é calculado pela fórmula: <span className="font-bold">Captação + Renovação - Evasão</span>. 
          Apenas a captação tem metas diferentes para Prata e Diamante. Para o repasse de 35% (Diamante), é necessário 
          atingir 100% da meta líquida Prata e 85% da meta líquida Diamante na soma dos dois trimestres do semestre.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Parâmetros da Simulação</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Cenário de Captação 25.2 (Meta Prata):
            </label>
            <div className="flex items-center">
              <input 
                type="range" 
                min="50" 
                max="120" 
                value={cenarioGlobal} 
                onChange={(e) => setCenarioGlobal(parseInt(e.target.value))}
                className="w-full mr-2"
              />
              <span className="font-bold">{cenarioGlobal}%</span>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Cenário de Renovação 25.2:
            </label>
            <div className="flex items-center">
              <input 
                type="range" 
                min="50" 
                max="120" 
                value={cenarioRenovacao} 
                onChange={(e) => setCenarioRenovacao(parseInt(e.target.value))}
                className="w-full mr-2"
              />
              <span className="font-bold">{cenarioRenovacao}%</span>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Cenário de Evasão 25.2 (% da meta):
            </label>
            <div className="flex items-center">
              <input 
                type="range" 
                min="70" 
                max="130" 
                value={cenarioEvasao} 
                onChange={(e) => setCenarioEvasao(parseInt(e.target.value))}
                className="w-full mr-2"
              />
              <span className="font-bold">{cenarioEvasao}%</span>
              <span className="ml-2 text-xs text-gray-500">{cenarioEvasao < 100 ? "Melhor que a meta" : cenarioEvasao > 100 ? "Pior que a meta" : "Na meta"}</span>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Melhoria na Taxa de Conversão (Captação):
            </label>
            <div className="flex items-center">
              <input 
                type="range" 
                min="0" 
                max="20" 
                value={melhoriaConversao} 
                onChange={(e) => setMelhoriaConversao(parseInt(e.target.value))}
                className="w-full mr-2"
              />
              <span className="font-bold">+{melhoriaConversao}%</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <button 
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => {
                setCenarioGlobal(85);
                setCenarioRenovacao(75);
                setCenarioEvasao(105);
                setMelhoriaConversao(0);
              }}
            >
              Cenário Conservador
            </button>
            
            <button 
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              onClick={() => {
                setCenarioGlobal(95);
                setCenarioRenovacao(85);
                setCenarioEvasao(95);
                setMelhoriaConversao(5);
              }}
            >
              Cenário Realista
            </button>
            
            <button 
              className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
              onClick={() => {
                setCenarioGlobal(105);
                setCenarioRenovacao(95);
                setCenarioEvasao(85);
                setMelhoriaConversao(10);
              }}
            >
              Cenário Otimista
            </button>
            
            <button 
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
              onClick={() => {
                setCenarioGlobal(90);
                setCenarioRenovacao(90);
                setCenarioEvasao(90);
                setMelhoriaConversao(15);
              }}
            >
              Diamante Possível
            </button>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Resultados da Simulação</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-3 rounded">
              <h3 className="text-sm font-medium text-gray-500">Captação Projetada 25.2</h3>
              <p className="text-2xl font-bold">{resultado.captacaoProjetada}</p>
            </div>
            
            <div className="bg-gray-100 p-3 rounded">
              <h3 className="text-sm font-medium text-gray-500">Renovação Projetada 25.2</h3>
              <p className="text-2xl font-bold">{resultado.renovacaoProjetada}</p>
            </div>
            
            <div className="bg-gray-100 p-3 rounded">
              <h3 className="text-sm font-medium text-gray-500">Evasão Projetada 25.2</h3>
              <p className="text-2xl font-bold text-red-500">{resultado.evasaoProjetada}</p>
            </div>
            
            <div className="bg-gray-100 p-3 rounded">
              <h3 className="text-sm font-medium text-gray-500">Total Líquido Projetado 25.2</h3>
              <p className="text-2xl font-bold text-green-600">{resultado.captacaoProjetada + resultado.renovacaoProjetada - resultado.evasaoProjetada}</p>
            </div>
          </div>
          
          <div className="mt-4 p-4 border border-blue-200 bg-blue-50 rounded">
            <h3 className="font-semibold mb-2">Distribuição de Repasse</h3>
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
              <p className="text-sm flex-1">Polos com Repasse Diamante (35%):</p>
              <p className="font-bold">{resultado.polosComRepasseDiamante} / {polosData.length}</p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <p className="text-sm flex-1">Polos com Repasse Prata (25%):</p>
              <p className="font-bold">{resultado.polosComRepassePrata} / {polosData.length}</p>
            </div>
          </div>
          
          <div className="mt-4 flex justify-center">
            <ResponsiveContainer width={200} height={200}>
              <PieChart>
                <Pie
                  data={dadosRepasse}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {dadosRepasse.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">Visão por Pilar (Captação + Renovação - Evasão)</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={dadosGrafico}
            margin={{ top: 20, right: 30, left: 20, bottom: 120 }}
            barSize={15}
            barGap={2}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={120} tick={{ fontSize: 11 }} />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Bar name="Captação 25.1" dataKey="Captacao251" stackId="a" fill="#8884d8" />
            <Bar name="Renovação 25.1" dataKey="Renovacao251" stackId="a" fill="#82ca9d" />
            <Bar name="Evasão 25.1" dataKey="Evasao251" stackId="a" fill="#ff8042" />
            <Bar name="Captação 25.2 (Proj.)" dataKey="CaptacaoProj252" stackId="b" fill="#8884d8" fillOpacity={0.6} />
            <Bar name="Renovação 25.2 (Proj.)" dataKey="RenovacaoProj252" stackId="b" fill="#82ca9d" fillOpacity={0.6} />
            <Bar name="Evasão 25.2 (Proj.)" dataKey="EvasaoProj252" stackId="b" fill="#ff8042" fillOpacity={0.6} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">Análise de Repasse por Polo (25.1 + 25.2)</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Polo</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total 25.1 Real</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total 25.2 Proj.</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meta Prata Total</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meta Diam. Total</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">% Ating. Prata</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">% Ating. Diam.</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Repasse</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {atingimentoPolo.map((polo) => (
                <tr key={polo.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{polo.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{polo.totalLiquido251}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{polo.totalLiquido252}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{Math.round(polo.totalMetaPrata)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{Math.round(polo.totalMetaDiamante)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ 
                    color: parseFloat(polo.percentualAtingimentoPrataTotal) >= 100 ? '#16a34a' : 
                           parseFloat(polo.percentualAtingimentoPrataTotal) >= 90 ? '#ca8a04' : '#dc2626'
                  }}>
                    <strong>{polo.percentualAtingimentoPrataTotal}%</strong>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ 
                    color: parseFloat(polo.percentualAtingimentoDiamanteTotal) >= 85 ? '#16a34a' : 
                           parseFloat(polo.percentualAtingimentoDiamanteTotal) >= 75 ? '#ca8a04' : '#dc2626'
                  }}>
                    <strong>{polo.percentualAtingimentoDiamanteTotal}%</strong>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {polo.repasse === 35 ? (
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">35% Diamante</span>
                    ) : polo.repasse === 25 ? (
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">25% Prata</span>
                    ) : (
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">Sem Repasse</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Detalhamento por Polo (Projeção 25.2)</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Polo</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Captação</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meta Cap.</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Renovação</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meta Ren.</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Evasão</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meta Eva.</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Liq.</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class. Nec.</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {atingimentoPolo.map((polo) => (
                <tr key={polo.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{polo.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{polo.matriculasProjetadas}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{polo.metaPrata252}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{polo.renovProjetado}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{polo.renovMeta252}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{polo.evasaoProjetado}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{polo.evasaoMeta252}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                    {polo.matriculasProjetadas + polo.renovProjetado - polo.evasaoProjetado}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{polo.classificadosNecessarios}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Simulador atualizado em 17 de abril de 2025</p>
        <p className="mt-1">O percentual de repasse é determinado pela soma dos resultados dos três pilares (Captação + Renovação - Evasão) nos dois trimestres</p>
      </div>
    </div>
  );
};

export default SimuladorCenarios;