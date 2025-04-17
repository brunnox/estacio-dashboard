import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const [selectedView, setSelectedView] = useState('comparative');

  // Dados de Classificados (24.1 vs 25.1)
  const classificadosData = [
    { name: 'AUTONOMISTAS', '24.1': 631, '25.1': 571, diff: -9.5 },
    { name: 'AV. MORUMBI', '24.1': 469, '25.1': 220, diff: -53.1 },
    { name: 'BARRA FUNDA', '24.1': 735, '25.1': 612, diff: -16.7 },
    { name: 'BUTANTÃ', '24.1': 537, '25.1': 490, diff: -8.8 },
    { name: 'CENTRO - OSASCO', '24.1': 1668, '25.1': 1166, diff: -30.1 },
    { name: 'CENTRO - POUSO ALEGRE', '24.1': 465, '25.1': 435, diff: -6.5 },
    { name: 'DALPLAZA CENTER', '24.1': 315, '25.1': 241, diff: -23.5 },
    { name: 'FREGUESIA DO Ó', '24.1': 323, '25.1': 285, diff: -11.8 },
    { name: 'METRÔ MORUMBI', '24.1': 428, '25.1': 286, diff: -33.2 },
    { name: 'SÃO FRANCISCO III', '24.1': 167, '25.1': 87, diff: -47.9 },
    { name: 'SHOP CENTER LAPA', '24.1': 406, '25.1': 340, diff: -16.3 },
    { name: 'SHOP IMPERIAL', '24.1': 124, '25.1': 129, diff: 4.0 },
    { name: 'SHOP NEBLINA', '24.1': 22, '25.1': 45, diff: 104.5 },
    { name: 'VILA REMÉDIOS', '24.1': 334, '25.1': 218, diff: -34.7 },
    { name: 'VILA ROMANA', '24.1': 289, '25.1': 244, diff: -15.6 }
  ];

  // Dados completos de Classificados para o total
  const allClassificadosData = [
    { name: 'AUTONOMISTAS', '24.1': 631, '25.1': 571, diff: -9.5 },
    { name: 'AV. MORUMBI', '24.1': 469, '25.1': 220, diff: -53.1 },
    { name: 'BARRA FUNDA', '24.1': 735, '25.1': 612, diff: -16.7 },
    { name: 'BUTANTÃ', '24.1': 537, '25.1': 490, diff: -8.8 },
    { name: 'CENTRO - OSASCO', '24.1': 1668, '25.1': 1166, diff: -30.1 },
    { name: 'CENTRO - POUSO ALEGRE', '24.1': 465, '25.1': 435, diff: -6.5 },
    { name: 'DALPLAZA CENTER', '24.1': 315, '25.1': 241, diff: -23.5 },
    { name: 'FREGUESIA DO Ó', '24.1': 323, '25.1': 285, diff: -11.8 },
    { name: 'METRÔ MORUMBI', '24.1': 428, '25.1': 286, diff: -33.2 },
    { name: 'SÃO FRANCISCO III', '24.1': 167, '25.1': 87, diff: -47.9 },
    { name: 'SHOP CENTER LAPA', '24.1': 406, '25.1': 340, diff: -16.3 },
    { name: 'SHOP IMPERIAL', '24.1': 124, '25.1': 129, diff: 4.0 },
    { name: 'SHOP NEBLINA', '24.1': 22, '25.1': 45, diff: 104.5 },
    { name: 'VILA REMÉDIOS', '24.1': 334, '25.1': 218, diff: -34.7 },
    { name: 'VILA ROMANA', '24.1': 289, '25.1': 244, diff: -15.6 }
  ];

  // Dados de Matrículas (24.1 vs 25.1)
  const matriculasData = [
    { name: 'AUTONOMISTAS', '24.1': 253, '25.1': 258, diff: 2.0 },
    { name: 'AV. MORUMBI', '24.1': 132, '25.1': 70, diff: -47.0 },
    { name: 'BARRA FUNDA', '24.1': 244, '25.1': 223, diff: -8.6 },
    { name: 'BUTANTÃ', '24.1': 196, '25.1': 200, diff: 2.0 },
    { name: 'CENTRO - OSASCO', '24.1': 689, '25.1': 505, diff: -26.7 },
    { name: 'CENTRO - POUSO ALEGRE', '24.1': 164, '25.1': 154, diff: -6.1 },
    { name: 'DALPLAZA CENTER', '24.1': 93, '25.1': 94, diff: 1.1 },
    { name: 'FREGUESIA DO Ó', '24.1': 120, '25.1': 122, diff: 1.7 },
    { name: 'METRÔ MORUMBI', '24.1': 159, '25.1': 118, diff: -25.8 },
    { name: 'SÃO FRANCISCO III', '24.1': 27, '25.1': 35, diff: 29.6 },
    { name: 'SHOP CENTER LAPA', '24.1': 172, '25.1': 128, diff: -25.6 },
    { name: 'SHOP IMPERIAL', '24.1': 52, '25.1': 47, diff: -9.6 },
    { name: 'SHOP NEBLINA', '24.1': 10, '25.1': 20, diff: 100.0 },
    { name: 'VILA REMÉDIOS', '24.1': 139, '25.1': 93, diff: -33.1 },
    { name: 'VILA ROMANA', '24.1': 68, '25.1': 87, diff: 27.9 }
  ];

  // Dados completos de Matrículas para o total
  const allMatriculasData = [
    { name: 'AUTONOMISTAS', '24.1': 253, '25.1': 258, diff: 2.0 },
    { name: 'AV. MORUMBI', '24.1': 132, '25.1': 70, diff: -47.0 },
    { name: 'BARRA FUNDA', '24.1': 244, '25.1': 223, diff: -8.6 },
    { name: 'BUTANTÃ', '24.1': 196, '25.1': 200, diff: 2.0 },
    { name: 'CENTRO - OSASCO', '24.1': 689, '25.1': 505, diff: -26.7 },
    { name: 'CENTRO - POUSO ALEGRE', '24.1': 164, '25.1': 154, diff: -6.1 },
    { name: 'DALPLAZA CENTER', '24.1': 93, '25.1': 94, diff: 1.1 },
    { name: 'FREGUESIA DO Ó', '24.1': 120, '25.1': 122, diff: 1.7 },
    { name: 'METRÔ MORUMBI', '24.1': 159, '25.1': 118, diff: -25.8 },
    { name: 'SÃO FRANCISCO III', '24.1': 27, '25.1': 35, diff: 29.6 },
    { name: 'SHOP CENTER LAPA', '24.1': 172, '25.1': 128, diff: -25.6 },
    { name: 'SHOP IMPERIAL', '24.1': 52, '25.1': 47, diff: -9.6 },
    { name: 'SHOP NEBLINA', '24.1': 10, '25.1': 20, diff: 100.0 },
    { name: 'VILA REMÉDIOS', '24.1': 139, '25.1': 93, diff: -33.1 },
    { name: 'VILA ROMANA', '24.1': 68, '25.1': 87, diff: 27.9 }
  ];

  // Dados de Metas 25.2
  const metasData = [
    { name: 'AUTONOMISTAS', realizado: 87, metaPrata: 103, metaDiamante: 126 },
    { name: 'AV. MORUMBI', realizado: 42, metaPrata: 49, metaDiamante: 67 },
    { name: 'BARRA FUNDA', realizado: 86, metaPrata: 115, metaDiamante: 140 },
    { name: 'BUTANTÃ', realizado: 116, metaPrata: 81, metaDiamante: 101 },
    { name: 'CENTRO - OSASCO', realizado: 229, metaPrata: 270, metaDiamante: 312 },
    { name: 'CENTRO - POUSO ALEGRE', realizado: 71, metaPrata: 69, metaDiamante: 91 },
    { name: 'DALPLAZA CENTER', realizado: 44, metaPrata: 43, metaDiamante: 59 },
    { name: 'FREGUESIA DO Ó', realizado: 32, metaPrata: 54, metaDiamante: 74 },
    { name: 'METRÔ MORUMBI', realizado: 70, metaPrata: 72, metaDiamante: 94 },
    { name: 'SÃO FRANCISCO III', realizado: 11, metaPrata: 24, metaDiamante: 37 },
    { name: 'SHOP CENTER LAPA', realizado: 47, metaPrata: 64, metaDiamante: 83 },
    { name: 'SHOP IMPERIAL', realizado: 17, metaPrata: 33, metaDiamante: 50 },
    { name: 'SHOP NEBLINA', realizado: 10, metaPrata: 20, metaDiamante: 28 },
    { name: 'VILA REMÉDIOS', realizado: 64, metaPrata: 59, metaDiamante: 73 },
    { name: 'VILA ROMANA', realizado: 34, metaPrata: 38, metaDiamante: 52 }
  ];

  // Dados de Taxa de Conversão
  const conversionRates = [
    { name: 'AUTONOMISTAS', value: 45.2 },
    { name: 'AV. MORUMBI', value: 31.8 },
    { name: 'BARRA FUNDA', value: 36.4 },
    { name: 'BUTANTÃ', value: 40.8 },
    { name: 'CENTRO - OSASCO', value: 43.3 },
    { name: 'CENTRO - POUSO ALEGRE', value: 35.4 },
    { name: 'DALPLAZA CENTER', value: 39.0 },
    { name: 'FREGUESIA DO Ó', value: 42.8 },
    { name: 'METRÔ MORUMBI', value: 41.3 },
    { name: 'SÃO FRANCISCO III', value: 40.2 },
    { name: 'SHOP CENTER LAPA', value: 37.6 },
    { name: 'SHOP IMPERIAL', value: 36.4 },
    { name: 'SHOP NEBLINA', value: 44.4 },
    { name: 'VILA REMÉDIOS', value: 42.7 },
    { name: 'VILA ROMANA', value: 35.7 }
  ];

  // Dados de Atingimento das Metas 24.2
  const atingimentoData = [
    { name: 'Atingiram Meta Prata (Meta 24.2)', value: 33.3 },
    { name: 'Ating 75% a 99% Prata', value: 20.0 },
    { name: 'Ating 50% a 74% Prata', value: 26.7 },
    { name: 'Ating < 50% Prata', value: 20.0 }
  ];

  const COLORS = ['#00C49F', '#FFBB28', '#FF8042', '#FF0000'];

  // Cálculo do total de Classificados e Matrículas
  const totalClassificados24 = allClassificadosData.reduce((sum, item) => sum + item['24.1'], 0);
  const totalClassificados25 = allClassificadosData.reduce((sum, item) => sum + item['25.1'], 0);
  const totalMatriculas24 = allMatriculasData.reduce((sum, item) => sum + item['24.1'], 0);
  const totalMatriculas25 = allMatriculasData.reduce((sum, item) => sum + item['25.1'], 0);

  // Taxa de conversão média
  const taxaConversao24 = (totalMatriculas24 / totalClassificados24) * 100;
  const taxaConversao25 = (totalMatriculas25 / totalClassificados25) * 100;
  const variacaoTaxaConversao = taxaConversao25 - taxaConversao24;

  return (
    <div className="p-4">
      {/* <h1 className="text-2xl font-bold mb-6 text-center">Dashboard de Metas de Captação - Estácio 25.2</h1> */}
      
      {/* Seletor de Visualização */}
      <div className="flex justify-center mb-6">
        <div className="bg-gray-100 p-1 rounded-lg">
          <button 
            className={`px-4 py-2 rounded-md ${selectedView === 'comparative' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
            onClick={() => setSelectedView('comparative')}
          >
            Comparativo 24.1 vs 25.1
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${selectedView === 'metas' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
            onClick={() => setSelectedView('metas')}
          >
            Metas 25.2
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${selectedView === 'conversion' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
            onClick={() => setSelectedView('conversion')}
          >
            Taxas de Conversão
          </button>
        </div>
      </div>

      {/* Cards com Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Classificados</h3>
          <div className="flex justify-between">
            <div>
              <p className="text-sm">24.1: {totalClassificados24}</p>
              <p className="text-sm">25.1: {totalClassificados25}</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-red-500">{((totalClassificados25 - totalClassificados24) / totalClassificados24 * 100).toFixed(1)}%</p>
              <p className="text-xs">Variação</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Matrículas Acadêmicas</h3>
          <div className="flex justify-between">
            <div>
              <p className="text-sm">24.1: {totalMatriculas24}</p>
              <p className="text-sm">25.1: {totalMatriculas25}</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-red-500">{((totalMatriculas25 - totalMatriculas24) / totalMatriculas24 * 100).toFixed(1)}%</p>
              <p className="text-xs">Variação</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Taxa de Conversão</h3>
          <div className="flex justify-between">
            <div>
              <p className="text-sm">24.1: {taxaConversao24.toFixed(1)}%</p>
              <p className="text-sm">25.1: {taxaConversao25.toFixed(1)}%</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-green-500">+{variacaoTaxaConversao.toFixed(1)}p.p.</p>
              <p className="text-xs">Variação</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gráficos */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          {selectedView === 'comparative' && 'Comparativo de Performance (24.1 vs 25.1)'}
          {selectedView === 'metas' && 'Metas vs Realizado por Polo (25.2)'}
          {selectedView === 'conversion' && 'Taxas de Conversão e Atingimento'}
        </h2>

        {selectedView === 'comparative' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-md font-semibold mb-2">Classificados por Polo</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={classificadosData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 120 }}
                  barSize={20}
                  barGap={8}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={120} tick={{ fontSize: 11 }} />
                  <YAxis />
                  <Tooltip />
                  <Legend verticalAlign="top" height={36} />
                  <Bar dataKey="24.1" name="2024.1" fill="#8884d8" />
                  <Bar dataKey="25.1" name="2025.1" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div>
              <h3 className="text-md font-semibold mb-2">Matrículas Acadêmicas por Polo</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={matriculasData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 120 }}
                  barSize={20}
                  barGap={8}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={120} tick={{ fontSize: 11 }} />
                  <YAxis />
                  <Tooltip />
                  <Legend verticalAlign="top" height={36} />
                  <Bar dataKey="24.1" name="2024.1" fill="#8884d8" />
                  <Bar dataKey="25.1" name="2025.1" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {selectedView === 'metas' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-md font-semibold mb-2">Metas vs Realizado por Polo</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={metasData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 120 }}
                  barSize={20}
                  barGap={8}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={120} tick={{ fontSize: 11 }} />
                  <YAxis />
                  <Tooltip />
                  <Legend verticalAlign="top" height={36} />
                  <Bar dataKey="realizado" name="Realizado 24.2" fill="#8884d8" />
                  <Bar dataKey="metaPrata" name="Meta Prata 25.2" fill="#82ca9d" />
                  <Bar dataKey="metaDiamante" name="Meta Diamante 25.2" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div>
              <h3 className="text-md font-semibold mb-2">Crescimento das Metas vs Ano Anterior</h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  data={[
                    { name: 'AUTONOMISTAS', prata: 8, diamante: 26 },
                    { name: 'AV. MORUMBI', prata: -6, diamante: 22 },
                    { name: 'BARRA FUNDA', prata: -25, diamante: -24 },
                    { name: 'BUTANTÃ', prata: -30, diamante: -25 },
                    { name: 'CENTRO - OSASCO', prata: -5, diamante: -3 },
                    { name: 'CENTRO - POUSO ALEGRE', prata: -27, diamante: -24 },
                    { name: 'DALPLAZA CENTER', prata: -39, diamante: -23 },
                    { name: 'FREGUESIA DO Ó', prata: 4, diamante: 35 },
                    { name: 'METRÔ MORUMBI', prata: 9, diamante: 18 },
                    { name: 'SÃO FRANCISCO III', prata: -20, diamante: 19 },
                    { name: 'SHOP CENTER LAPA', prata: -27, diamante: -10 },
                    { name: 'SHOP IMPERIAL', prata: -27, diamante: 6 },
                    { name: 'SHOP NEBLINA', prata: 82, diamante: 4 },
                    { name: 'VILA REMÉDIOS', prata: -5, diamante: 7 },
                    { name: 'VILA ROMANA', prata: 27, diamante: 16 }
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 120 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={120} tick={{ fontSize: 11 }} />
                  <YAxis domain={[-40, 40]} />
                  <Tooltip />
                  <Legend verticalAlign="top" height={36} />
                  <Line type="monotone" dataKey="prata" name="% Cresc. Meta Prata" stroke="#82ca9d" strokeWidth={2} />
                  <Line type="monotone" dataKey="diamante" name="% Cresc. Meta Diamante" stroke="#ffc658" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {selectedView === 'conversion' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-md font-semibold mb-2">
                Taxa de Conversão 25.1 por Polo
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart
                  data={conversionRates.map(item => ({
                    ...item,
                    avg: 40.2 // Média geral
                  }))}
                  margin={{ top: 20, right: 30, left: 20, bottom: 120 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    angle={-45}
                    textAnchor="end"
                    height={120}
                    tick={{ fontSize: 11 }}
                  />
                  <YAxis domain={[0, 50]} />
                  <Tooltip />
                  <Legend verticalAlign="top" height={36} />

                  {/* Barras de conversão */}
                  <Bar
                    dataKey="value"
                    name="Taxa de Conversão (%)"
                    fill="#8884d8"
                    barSize={20}
                    barGap={8}
                  />

                  {/* Linha da média geral */}
                  <Line
                    type="monotone"
                    dataKey="avg"
                    name="Média Geral (40.2%)"
                    stroke="#82ca9d"
                    strokeWidth={2}
                    dot={false}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            
            <div>
              <h3 className="text-md font-semibold mb-2">Distribuição do Atingimento de Metas 24.2</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={atingimentoData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, value}) => `${name}: ${value}%`}
                  >
                    {atingimentoData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>

      {/* Análise e Projeções */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Desafios Críticos</h3>
          <ul className="list-disc pl-5">
            <li className="mb-1">Queda de 22.4% nos classificados (24.1 vs 25.1)</li>
            <li className="mb-1">Apenas 33.3% dos polos atingiram meta prata em 24.2</li>
            <li className="mb-1">Nenhum polo atingiu meta diamante em 24.2</li>
            <li className="mb-1">3 polos com mais de 30% de queda em classificados</li>
            <li className="mb-1">Meta diamante 25.2 exige crescimento médio de 44.5%</li>
          </ul>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Oportunidades</h3>
          <ul className="list-disc pl-5">
            <li className="mb-1">Aumento de 3.8 p.p. na taxa de conversão (24.1 vs 25.1)</li>
            <li className="mb-1">Redução de 30.9% no volume de classificados necessários (meta prata)</li>
            <li className="mb-1">3 polos com crescimento positivo nos classificados</li>
            <li className="mb-1">5 polos com histórico de atingimento de meta prata (24.2)</li>
            <li className="mb-1">3 novos polos com potencial de expansão no Nordeste</li>
          </ul>
        </div>
      </div>

      
      {/* Rodapé */}
      <div className="mt-6 text-center text-sm text-gray-500">
        
      </div>
    </div>
  );
};

export default Dashboard;