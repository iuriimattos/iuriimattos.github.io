# Guia de Referência Rápida de Markdown — Enfermagem

Este é um arquivo Markdown de exemplo adaptado para quem estuda **Enfermagem** e área da **Saúde**, mantendo todos os recursos do guia original (formatação de texto, listas, links, imagens, código, matemática, tabelas, GFM etc.), porém com exemplos aplicados ao dia a dia clínico.

Se você usa o **Obsidian** (como o Padawan já usa 😉) ou o Sublime Text com o plugin Markdown Preview, basta abrir a pré-visualização para ver o resultado renderizado.

[TOC]

## Básico de texto

Isto é *hipotensão* e isto é **hipertensão** — o itálico pode indicar um termo técnico e o negrito pode destacar um alerta clínico.

Outro *sinal* e outro **sintoma**: isto é um texto importante sobre risco de queda do paciente.

E sinais de porcentagem: saturação de O₂ em 95% e glicemia capilar dentro de 100%.

Este é um parágrafo com uma nota de rodapé sobre um medicamento.[^dipirona]

Insira `[TOC]` sem espaços para gerar um sumário automático do seu resumo (apenas em analisadores compatíveis, como o Obsidian).

[^dipirona]: Dipirona sódica — analgésico e antitérmico, atenção a alergias antes da administração.

## Indentação (citações)

> "Dor 7 em escala de 0 a 10, localizada em região lombar."
>
> — Relato do paciente durante anamnese
>
>> Observação da enfermagem: sinal compatível com possível cólica renal, encaminhado para avaliação médica.

## Títulos

# Sistema Cardiovascular (h1)
## Sinais Vitais (h2)
### Frequência Cardíaca (h3)
#### Bradicardia (h4)
##### Causas comuns (h5)
###### Observações de plantão (h6)

## Listas de exemplo

* marcadores podem ser `-`, `+` ou `*`
* Sinais vitais a verificar no plantão:
  1. Pressão arterial (PA)
  2. Frequência cardíaca (FC)
  3. Frequência respiratória (FR)
  4. Temperatura (Tax)
  5. Saturação de oxigênio (SpO₂)
     * subitem: verificar com oxímetro de pulso
     * subitem: registrar se paciente está em O₂ suplementar
* Escalas utilizadas na avaliação
  * Escala de Glasgow (nível de consciência)
  * Escala de Braden (risco de lesão por pressão)
  * Escala de Morse (risco de queda)

## Links

Consulte a bula do medicamento [aqui](https://www.anvisa.gov.br/) ou a referência da instituição[^1].

Referências no estilo Vancouver também podem ser usadas como link com título: [Diretrizes de Enfermagem — COREN](https://www.coren-sp.gov.br/ "Conselho Regional de Enfermagem de São Paulo").

As referências geralmente ficam no final do documento — ótimo para citar protocolos, PubMed ou o DeCS/BVS.

## Imagens

Uma imagem de exemplo (diagrama anatômico):

![Anatomia do coração](anatomia-coracao.png "Sistema cardiovascular")

Assim como os links, as imagens também podem usar referências em vez de link inline — útil para organizar um resumo com várias figuras de anatomia.

## Código (blocos de texto técnico)

Blocos de código não servem só para programação — são ótimos para destacar **valores laboratoriais**, **prescrições** ou **fórmulas de diluição** sem que o Markdown interprete os símbolos.

Exemplo de exame laboratorial:
```
Hemograma completo
Hemoglobina: 13,5 g/dL (referência: 12–16 g/dL)
Hematócrito: 40% (referência: 36–48%)
Leucócitos: 7.200/mm³ (referência: 4.000–11.000/mm³)
Plaquetas: 250.000/mm³ (referência: 150.000–450.000/mm³)
```

Exemplo de prescrição médica formatada:
```text
Paciente: Leito 12
1) Soro Fisiológico 0,9% 500 mL EV — 21/21h
2) Dipirona 1g EV — se dor ou febre (até 4x/dia)
3) Omeprazol 40mg EV — 1x ao dia, em jejum
```

## Matemática

Fórmulas usadas em cálculo de medicação também podem ser exibidas com MathJax/KaTeX (ative nas configurações do seu app, como Obsidian → Core Plugins).

Cálculo de gotejamento (macrogotas por minuto):

$$\text{Gotas/min} = \frac{\text{Volume (mL)}}{\text{Tempo (h)} \times 3}$$

Cálculo de dose por peso corporal:

$$\text{Dose total} = \text{Dose prescrita (mg/kg)} \times \text{Peso do paciente (kg)}$$

Regra de três simples para diluição de medicamentos:

$$\frac{C_1 \times V_1}{C_2} = V_2$$

## GitHub Flavored Markdown (e Obsidian)

Se você usa o analisador do GitHub ou o Obsidian, pode usar:

* Lista de tarefas do plantão:
  - [x] Verificar sinais vitais às 08h
  - [x] Administrar medicação das 09h
  - [ ] Trocar curativo do leito 12
  - [ ] Registrar balanço hídrico

* Texto tachado para indicar medicação suspensa: ~~Metformina 850mg~~ (suspenso por indicação médica)

* Emojis para anotações rápidas de plantão: :syringe: :pill: :heart: :thermometer:

* Menção a colegas/equipe: `@enfermeira.responsavel`

## Tabelas

A extensão `tables` é ótima para montar tabelas de referência rápida, como valores normais de sinais vitais por faixa etária:

| Faixa etária | FC (bpm) | FR (irpm) | PA sistólica (mmHg) |
|---|---|---|---|
| Recém-nascido | 120–160 | 30–60 | 60–90 |
| Criança (1–8 anos) | 80–110 | 20–30 | 90–110 |
| Adulto | 60–100 | 12–20 | 90–120 |
| Idoso | 60–100 | 12–20 | 90–140 |

### Tabelas Wiki (formato alternativo)

Caso seu app use o padrão wiki-tables:

|| *Medicamento* || *Via* || *Horário* ||
|| Dipirona || EV || 6/6h ||
|| Omeprazol || EV || 1x ao dia ||
|| Enoxaparina || SC || 1x ao dia ||

## Listas de Definição

Útil para montar um pequeno glossário de estudo (requer extensão `def_list`):

Taquicardia
: Frequência cardíaca acima de 100 batimentos por minuto em repouso.

Bradicardia
: Frequência cardíaca abaixo de 60 batimentos por minuto em repouso.

Dispneia
: Sensação subjetiva de dificuldade para respirar.

Afebril
: Paciente sem elevação da temperatura corporal (Tax < 37,5°C).

## Extensões úteis (dica para uso no Obsidian)

Como você já usa Obsidian para organização de estudos, vale ativar/lembrar destes recursos ao montar seus resumos de Enfermagem:

* `footnotes` — notas de rodapé para referenciar bulas/diretrizes
* `tables` — tabelas de valores de referência
* `fenced_code` — blocos de código para prescrições e exames
* `toc` — sumário automático em resumos longos
* `tasklist` — checklists de procedimentos e plantão
* `highlight` (`==texto==`) — para destacar pontos de prova, ex.: ==atenção: contraindicado em gestantes==

## Sobre

Este arquivo é uma adaptação do guia original de Markdown para TI, reorganizado para uso em estudos de **Enfermagem**, mantendo a mesma lógica dos recursos (texto, listas, links, imagens, código, matemática, tabelas e GFM) — só trocando os exemplos técnicos de programação por exemplos clínicos.
