const Calcular = document.getElementById('calcular');

function calculadora_financas() {
  const nome = document.getElementById('nome').value;
  const v_aplicado = document.getElementById('v_aplicado').value;
  const t_juros = document.getElementById('t_juros').value;
  const n_parcelas = document.getElementById('n_parcelas').value;

  const resultado = document.getElementById('resultado');
  
  if (    nome !== '' && v_aplicado !== '' &&   t_juros !== '' && n_parcelas !== '') {
    const vPolpado = (
      v_aplicado *    (((1 + t_juros / 100) ** n_parcelas - 1) / (t_juros / 100))
    );

    resultado.textContent = `${nome},Se você aplicar R$ ${v_aplicado} , à taxa de juros de ${t_juros}% ao mês, durante ${n_parcelas} meses, acumulará uma poupança de R$ ${vPolpado}`;

  } else {

    resultado.textContent = 'Para o seu valor poupado, favor preencher todos os campos.';

  }
}

calcular.addEventListener('click', calculadora_financas);