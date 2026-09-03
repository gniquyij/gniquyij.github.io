---
layout: post
title: 从 Replication Crisis 到 Generalizability、Theory 和 Measurement
description: 心理学的方法论问题不只在结果能否重复，还涉及测量、泛化、理论、因果推断和现实应用。
date: 2026-09-03
lang: zh
type: Question
category: 生活
tags:
  - 心理学
  - 可复现性
  - 研究方法
ai_assisted: true
ai_disclosure: 资料由 AI 协助检索、核查和整理。
language_note: 研究术语和部分关键词保留英文。
---

## 不同研究领域走到了哪一步？

心理学包含的研究对象和方法差异很大，很难用一个统一的“成熟度”概括。

不同研究问题能够使用的 measurement、experimental control 和 quantitative model 并不相同。有些研究可以精确控制输入，记录 reaction time、choice、error 或 physiological response，并用新数据检验定量模型。有些问题则更依赖 self-report，或更容易随个人状态、时间和环境变化。对 security、belonging、home、identity 和 meaning 等宽泛概念，是否存在边界清楚、可独立测量的单一变量，需要通过 construct-validation research 检验。

下表只列出几个较宽、相对常见的研究领域；领域名称大致参考 APA 在科学奖项中使用的分类。<a id="cite-apa-areas"></a>[[APA, scientific award areas]](#ref-apa-areas) 第二栏不对应已有的领域评级，而是按照 measurement、experimental control、quantitative prediction 和 external validation 四个维度作出的定性概括，仅用于说明各领域研究条件的大致差异。Construct validity、generalizability 和 theory building 的判断框架可参考 Strauss and Smith、Yarkoni 以及 Eronen and Bringmann。<a id="cite-strauss-2009"></a>[[Strauss & Smith, 2009]](#ref-strauss-2009) [[Yarkoni, 2022]](#ref-yarkoni-2022) [[Eronen & Bringmann, 2021]](#ref-eronen-2021)

前一篇 [Attention, Attention, Attention](/writing/attention-attention-attention/) 讨论的 sustained attention、task switching 和 attentional capture 主要落在 cognition and human learning 这一领域；其中的睡眠、运动和屏幕视觉负荷部分，则还涉及 health psychology、exercise-and-cognition research 和 ergonomics。

| 研究领域 | 定量成熟度（定性概括） | 典型研究对象 | 常用数据与方法 | 主要限制 |
| --- | --- | --- | --- | --- |
| Perception and psychophysics | 较高；现实迁移因任务而异 | sensation、perception、motor performance | 精确刺激、感知阈值、reaction time、signal detection、眼动 | 受控刺激与自然场景存在差异 |
| Cognition and human learning | 受控任务中较高；现实任务不一定 | attention、learning、memory、language、decision-making | reaction time、choice、error、experimental task、computational model | 日常 construct 可能同时涉及多个 cognitive processes |
| Behavioral and cognitive neuroscience | 对 brain–behavior 关系的定量描述较强；对 psychological mechanism 的解释需另行检验 | cognition、emotion、motivation 的 neural mechanisms | fMRI、EEG、lesion、stimulation、computational model | neural correlate 本身不足以确立 psychological explanation |
| Individual differences | 描述和部分预测中等；机制解释有限 | personality、psychometrics、mental ability、behavioral genetics | 问卷、测验、twin/family studies、GWAS、longitudinal cohort | self-report、construct validity、population specificity |
| Developmental psychology | 因年龄、construct 和设计而异 | 从婴儿期到老年的心理与行为变化 | 观察、实验、longitudinal cohort、学校与家庭数据 | age、cohort、family、culture 和 historical time 难以完全分离 |
| Social and cultural psychology | 因 construct、样本和 context 而异 | social cognition、attitude、norm、identity、culture | 实验、问卷、平台数据、cross-cultural study | context sensitivity、representation 和 measurement invariance |
| Clinical psychology and psychopathology | 治疗平均效果可用 RCT 评估；个体预测因问题而异 | diagnosis、symptom、treatment、relapse | 症状量表、RCT、医疗记录、digital phenotyping | 诊断与症状异质；群体平均不直接等于个体预测 |
| Health psychology | 因 outcome 和 intervention 而异 | sleep、exercise、adherence、health behavior | wearable、medical outcome、cohort、behavioral intervention | 长期 causal chain 可能包含多重 confounding 与 mediation |
| Educational psychology | 对具体干预的 performance effect 可直接比较；机制解释不一定 | learning、instruction、assessment | 考试、作业、课堂平台、randomized intervention | performance measure 不自动识别 psychological mechanism |
| Industrial and organizational psychology | 因组织、outcome 和设计而异 | selection、performance、turnover、teamwork | 企业记录、绩效、团队网络、field experiment | 组织与制度环境不可直接互换 |
| Community and environmental psychology | 因 construct 和 natural experiment 的识别条件而异 | community、housing、environment、belonging、security | field study、行政数据、空间行为、natural experiment | 很多 exposure 难以随机化；宽泛 construct 需要额外的 validity evidence |

Comparative/evolutionary、counseling、school、forensic、sport 和 neuropsychology 等没有在表中单列。表中的 behavioral and cognitive neuroscience 只涉及它与心理过程研究相交的部分，并不代表 neuroscience 整体。Computational social science、HCI / human factors 和 computational neuroscience 也没有被放进这张表：它们横跨心理学、计算机科学、工程、神经科学或社会科学，与表中按研究对象划分的领域并非同一层级。Psychodynamic 则是理论与临床传统，不与上述研究领域并列。

这并不是说后一类体验不存在，或者不值得研究。问题在于，它们可能并不是单一变量。

例如，可以暂时把 home 拆成 familiarity、control、privacy、attachment、identity continuity、financial stability 和 freedom from social evaluation 等可能成分；这份拆分不是一套已经验证的 home measurement model。研究者可以对其中某一成分提出操作化，但此时结论首先适用于该成分和该操作化，不能自动推广到完整的 home experience。反过来，如果把 home 作为一个整体 construct，就需要另外提供其边界、内部结构以及 convergent 和 discriminant validity 的证据。<a id="cite-strauss-home"></a>[[Strauss & Smith, 2009]](#ref-strauss-2009)

这里存在一个方法上的 tension：操作化可以提高 measurement 的精确度，却也会缩小结论直接指向的经验范围。保留一个概念的完整性与清楚界定它，并不总是同一件事。因而，精确测量某个成分之后，仍需要说明它与原来那个较宽概念是什么关系。

## Replication、generalizability、theory 和 measurement 在问什么？

Pashler 和 Wagenmakers 将 replicability 争论称为 crisis of confidence；Yarkoni 使用 generalizability crisis，Eronen 和 Bringmann 则讨论 theory crisis。<a id="cite-pashler-2012"></a>[[Pashler & Wagenmakers, 2012]](#ref-pashler-2012) [[Yarkoni, 2022]](#ref-yarkoni-2022) [[Eronen & Bringmann, 2021]](#ref-eronen-2021) 这些标签相关，但检查的不是同一件事。

Replication 问的是重新收集数据时是否还能观察到相近结果；generalizability 问的是换 participant、stimulus、task、language、culture、place 或 time 后，结果在哪些条件下仍能观察到；theory 问的是现有数据是否能在不同解释之间作出区分。

Measurement 和 construct validity 位于这三个问题的基础位置。研究者首先需要说明一个操作、量表或行为指标被解释成什么 construct，以及这种解释有哪些 validity evidence。<a id="cite-strauss-foundation"></a>[[Strauss & Smith, 2009]](#ref-strauss-2009) 如果 attention、security 或 home 没有被清楚界定，replication 只能检查同一操作化能否再次产生相近结果；generalizability 只能检查这种操作化在其他样本和情境中的表现；theory comparison 也可能无法判断理论所解释的是否真是声称的 construct。

针对 replication 和统计推断问题，目前已有一组可执行的做法，包括 preregistration、Registered Reports、增加样本量、报告 uncertainty 以及公开数据和代码。<a id="cite-open-practices"></a>[[Nosek et al., 2018]](#ref-nosek-2018) [[Chambers & Tzavella, 2022]](#ref-chambers-2022) 这些做法能在多大程度上减少 p-hacking、publication bias 或偶然显著结果，取决于具体设计和执行；它们不会自动改变旧文献的证据质量。

Generalizability crisis 更难，因为不存在一个叫作“所有人和所有场景”的总体，可以一次抽样完成。研究者必须先说明希望泛化到哪里，再对相应的人群、任务和环境进行系统取样。它不只是把 participant number 从 50 增加到 5,000，而是扩大 variation 的范围。Yarkoni 对这一问题的核心批评是：心理学研究经常只对 participant 进行抽样，却在没有系统抽取 stimuli、tasks 和 situations 的情况下，把结论推广到更大的范围。<a id="cite-yarkoni-2022"></a>[[Yarkoni, 2022]](#ref-yarkoni-2022)

Theory quality 还没有一套单一、通用的改进流程。Oberauer 和 Lewandowsky 主张以 computational model 加强 theory 与 hypothesis 之间的逻辑联系；Eronen 和 Bringmann 则把 robust phenomena、construct validity 和 causal relation 列为 theory building 的困难。<a id="cite-oberauer-2019"></a>[[Oberauer & Lewandowsky, 2019]](#ref-oberauer-2019) <a id="cite-eronen-2021"></a>[[Eronen & Bringmann, 2021]](#ref-eronen-2021) Formalization 可以解决部分问题，但形式精确本身不能建立 construct validity。

心理学的方法论争论还包括 reproducibility、inference、representation、ecological validity 和 applicability 等问题。把上述四个问题分开，主要是为了辨认一项研究目前提供的是哪一种证据，以及下一步还缺什么。

## 心理学过去十几年真正改变了什么？

可以直接确认的变化，是心理学中出现了 preregistration、Registered Reports 和大规模跨实验室协作等制度与研究网络；这些做法的普及程度仍需按子领域、期刊和时间分别估计。<a id="cite-nosek-2018"></a>[[Nosek et al., 2018]](#ref-nosek-2018) <a id="cite-chambers-2022"></a>[[Chambers & Tzavella, 2022]](#ref-chambers-2022)

2015 年的 Reproducibility Project 对发表于三本期刊的 100 项 experimental 和 correlational studies 进行了 replication；它不是对全部心理学文献的随机抽样。<a id="cite-osc-2015"></a>[[Open Science Collaboration, 2015]](#ref-osc-2015) Many Labs 2 在 36 个国家和地区的 125 个样本中检验了 28 项 findings；Psychological Science Accelerator 则建立了可持续运行的分布式实验室网络。<a id="cite-klein-2018"></a>[[Klein et al., 2018]](#ref-klein-2018) <a id="cite-moshontz-2018"></a>[[Moshontz et al., 2018]](#ref-moshontz-2018) 这些项目说明跨地点协作已经可以实施；它们并不证明所有心理学研究都已经采用同样的规模或规范。

这些变化首先帮助研究者回答：一个结果究竟靠不靠谱？

但在不同实验室使用相似 protocol 得到相近结果，主要提供 replicability 方面的证据，本身不足以证明结论能够泛化到所有目标情境。评估 generalizability 需要先说明目标范围，再检查 participant、stimulus、task、language、culture、place 或 time 等维度上的 variation。<a id="cite-yarkoni-early"></a>[[Yarkoni, 2022]](#ref-yarkoni-2022)

再往后才是更困难的 theory 问题：即使现象可以重复、可以跨情境出现，我们是否知道它为什么发生？

同一个结果可能与多个理论一致。例如，如果研究观察到短视频之后工作表现下降，attentional capture、reward expectation、goal switching、mental fatigue 或 motivational reallocation 都可能被提出作为解释。重复同一种实验可以增加或减少对该现象的信心，但如果这些理论对该实验给出相同预测，结果就不能在它们之间作出区分。要比较这些解释，需要它们事先给出不同的预测，再用新数据检验。

## Hypothesis-driven 与 data-driven research

不能把心理学研究统一描述为“先有 hypothesis，再收集数据”。这里需要区分 confirmatory 和 exploratory research：前者在观察结果前指定要检验的问题与分析，后者可以从数据中寻找 pattern，再形成待检验的 hypothesis。<a id="cite-nosek-confirm"></a>[[Nosek et al., 2018]](#ref-nosek-2018)

Supervised 与 unsupervised learning 可以作为类比：前者有预先指定的 target，后者尝试从未标注数据中发现 pattern。但这只是类比，hypothesis-driven research 不等于 supervised learning，exploratory research 也不等于 unsupervised learning。Data-driven research 同样需要研究者选择 measurement、preprocessing、features、model 和 interpretation；machine learning 可以检查 out-of-sample prediction，但 prediction 本身不能确立 construct validity 或 causal explanation。<a id="cite-van-lissa-2023"></a>[[Van Lissa, 2023]](#ref-van-lissa-2023) [[Strauss & Smith, 2009]](#ref-strauss-2009) [[Hofman et al., 2021]](#ref-hofman-2021)

心理学文献中一个有记录的研究规范问题是：部分研究过程具有 exploratory 性质，结果却被呈现为事先预测的 confirmatory finding。Kerr 将这种做法称为 HARKing：hypothesizing after the results are known。<a id="cite-kerr-1998"></a>[[Kerr, 1998]](#ref-kerr-1998) 即使研究者没有故意反复尝试分析，data-dependent decisions 也可能形成 Gelman 和 Loken 所说的 garden of forking paths，使原本的 significance test 不再具有表面上的含义。<a id="cite-gelman-2013"></a>[[Gelman & Loken, 2013]](#ref-gelman-2013)

一种较清楚的研究流程，是区分 discovery 与 independent confirmation，而不是把 hypothesis testing 换成 unsupervised learning：

broad observation → pattern discovery → new hypothesis → independent confirmation → external validation → causal test

第一批数据可以用于发现 cluster、时间模式和新的 construct；第二批独立数据用于检查这些结构是否再次出现，以及模型能否预测新参与者的测量结果；之后再通过 experiment 或 natural experiment 判断模型抓到的是 causal mechanism，还是只具有预测价值的相关信号。

Preregistration 的一个目的，是区分观察结果之前指定的 research questions 和 analysis plan，与观察结果之后形成的分析或解释；探索性分析仍然可以报告，但需要被标明。<a id="cite-nosek-prereg"></a>[[Nosek et al., 2018]](#ref-nosek-2018) 它不能仅凭“已经 preregistered”保证 measurement、执行和推断都正确。

## 计算方法改变了什么？

前面的表格没有把 computational social science、HCI / human factors、computational cognitive modeling、computational neuroscience 和 computational psychiatry 当作心理学子领域进行比较。它们的边界和层级并不相同。这里把它们放在一起，来回答另一个问题：计算方法进入这些研究之后，具体增加了哪些可以观察、建模或检验的东西，又留下了哪些限制？

Computational social science 把 social science 的研究问题与大规模 digital data、computational modeling 和 machine learning 等方法结合起来。Communication、mobility、transaction 和 online interaction 等数字记录，使研究者能够在以往较难达到的规模和时间跨度上观察 collective behavior、social network 和 information diffusion。<a id="cite-lazer-2009"></a>[[Lazer et al., 2009]](#ref-lazer-2009) Machine learning 在这里可以用于 prediction 和 pattern discovery，实验与因果推断则回答不同的问题。Hofman 等人因此主张将 explanation 与 prediction 明确区分并结合，而不是把预测准确度本身当作机制解释。<a id="cite-hofman-2021"></a>[[Hofman et al., 2021]](#ref-hofman-2021) 数字记录也不是对社会的无偏取样：平台人口、平台特有行为以及数据获取方式都可能造成偏差。<a id="cite-ruths-2014"></a>[[Ruths & Pfeffer, 2014]](#ref-ruths-2014)

HCI，以及与它部分重叠的 human factors，研究 interactive computing systems 的设计、评估和使用，以及人与这些系统交互时出现的现象。研究者可以把一个设计构想做成 prototype，在具体任务中比较不同方案，并测量 completion time、error、behavior 或 subjective experience；也可以使用访谈、观察和 field study。它的特点不是拥有一套统一的 protocol，而是能够在设计、系统实现和 empirical evaluation 之间形成较短的反馈循环。相应地，某个 interface 在特定用户、任务和情境中表现更好，首先支持的是关于该设计的结论，并不自动构成关于一般人类心理的理论。

Computational cognitive modeling 更像 cognition and human learning 内部的一组方法，而不是边界清楚的新子领域。研究者把关于 memory、learning 或 decision-making 的假设写成能够运行的 model，再比较不同模型对 reaction time、choice 或 error pattern 的预测。它的价值在于迫使 theory 给出更明确的 prediction；限制是多个模型仍可能产生相近结果，而且模型的形式精确不等于其中的 psychological construct 已经有效。<a id="cite-oberauer-computational"></a>[[Oberauer & Lewandowsky, 2019]](#ref-oberauer-2019)

Computational neuroscience 使用数学模型与 simulation 描述神经活动，或提出神经系统如何实现 perception、decision 和 learning 的机制。这个领域包含 descriptive、normative 和 mechanistic models。Machine learning 也被用于 neural data analysis 和 prediction，但它本身并不构成一种 mechanistic explanation。<a id="cite-wang-2020"></a>[[Wang et al., 2020]](#ref-wang-2020) Artificial neural networks 可以生成能够与 neural 和 behavioral data 比较的预测，但其组成和学习方式并不因此等同于真实大脑；如果模型的目标是解释 biological mechanism，就需要检验 neuron、plasticity、inhibition 和 connectivity 等 biological constraints。<a id="cite-pulvermuller-2021"></a>[[Pulvermüller et al., 2021]](#ref-pulvermuller-2021)

Computational psychiatry 试图把 clinical data、neuroscience、mechanistic model 和 machine learning 结合起来。Theory-driven approaches 可以把疾病机制写进模型；data-driven approaches 可以用于 classification 或 treatment-outcome prediction。<a id="cite-huys-2016"></a>[[Huys et al., 2016]](#ref-huys-2016) 但对 228 项 psychiatric prediction studies 的 systematic review 发现，许多模型仍存在高 risk of bias、缺少 independent external validation，能够证明 real-world clinical implementation 的研究很少。<a id="cite-meehan-2022"></a>[[Meehan et al., 2022]](#ref-meehan-2022)

这些领域可能显得更科学。一个可能的原因是：研究者往往必须把 measurement、algorithm 或 mechanism 写得更明确，模型或系统还可以在新数据和新任务上直接测试。Computation 在这里增加的是表达和检验的能力；研究的 validity 仍取决于数字记录是否具有 representativeness、prediction 是否对应所需的 explanation，以及模型中的 construct 是否成立。它把前面的 tension 表达得更清楚：模型可以非常精确，但这种精确性首先属于模型，模型与完整研究对象之间的关系仍然需要证据。

## 问题究竟出在哪里？

下面几个案例分别把问题落到 effect size、publication bias、diagnostic construct、statistical power 和 external validation。

实验性研究中，一些曾经很有影响力的 effect 值得重新评估。以 ego depletion 为例，一项 36 个实验室、3,531 名参与者的 preregistered study 得到的效应约为原先 meta-analytic estimate 的十分之一，confirmatory Bayesian analysis 更支持 null model。<a id="cite-vohs-2021"></a>[[Vohs et al., 2021]](#ref-vohs-2021) 这一结果对该 effect 原先估计的强度和稳健性构成质疑。

Positive psychology intervention literature 也需要按研究质量重新判断。一项包含 39 个 randomized studies 的 meta-analysis 得到小效应，同时发现 study quality 差异和 publication bias；较低质量研究报告的效应更大。<a id="cite-bolier-2013"></a>[[Bolier et al., 2013]](#ref-bolier-2013) 因此，对 intervention effect 的估计需要结合 study quality、control condition 和 publication bias 解读。

Clinical psychology 和 psychiatry 中需要重新检验的，是把内部高度异质的 diagnostic category 当作单一 mechanism。HiTOP 文献把 heterogeneity、comorbidity 和 unreliability 列为传统分类需要处理的问题，并提出 dimensional hierarchy 作为替代框架。<a id="cite-kotov-2021"></a>[[Kotov et al., 2021]](#ref-kotov-2021) 研究上需要分别检验 diagnosis、cause 和 treatment response 之间的关系。

Neuroscience research 同样需要检查 sample size 和 statistical power。Button 等人对当时 neuroscience literature 的分析指出，低 statistical power 会降低发现的可靠性并夸大 effect-size estimates。<a id="cite-button-2013"></a>[[Button et al., 2013]](#ref-button-2013) 对 psychiatric machine-learning model，则需要检查 independent external validation 和 clinical-utility evidence，而不只是 internal validation 的表现。<a id="cite-meehan-conclusion"></a>[[Meehan et al., 2022]](#ref-meehan-2022)

判断应落在研究主张与证据的对应关系上。一个直接的检查顺序是：effect 能否独立重复；construct 是否有 validity evidence；结论能泛化到哪里；不同 theory 是否给出了可区分的预测；model 是否在真正独立的数据上接受过检验。

现有方法学文献已经为 replication 提出了一些比较具体、可执行的程序：preregistration 在观察结果前记录研究问题和分析计划，Registered Reports 在结果产生前评审研究问题与方法。<a id="cite-nosek-conclusion"></a>[[Nosek et al., 2018]](#ref-nosek-2018) [[Chambers & Tzavella, 2022]](#ref-chambers-2022) 对 generalizability，需要明确 target population 和 target settings；对 measurement，需要持续积累 construct-validity evidence；对 theory building，则需要让不同理论给出可区分的预测。<a id="cite-yarkoni-conclusion"></a>[[Yarkoni, 2022]](#ref-yarkoni-2022) [[Strauss & Smith, 2009]](#ref-strauss-2009) [[Eronen & Bringmann, 2021]](#ref-eronen-2021)

由此形成的判断是：心理学的进展不只是获得更多数据、使用更复杂的模型或完成更多 replication，而是更准确地说明每一种证据能够支持哪一层结论。Replication 检查结果是否再次出现；generalizability 界定它适用于哪里；theory comparison 检查它支持哪一种解释；measurement 则决定这些结论究竟在谈什么。

## References

<a id="ref-apa-areas"></a>
American Psychological Association. *Distinguished Scientific Awards for an Early Career Contribution to Psychology.* https://www.apa.org/about/awards/early-career-contribution [↩](#cite-apa-areas)

<a id="ref-bolier-2013"></a>
Bolier, L., Haverman, M., Westerhof, G. J., Riper, H., Smit, F., & Bohlmeijer, E. (2013). Positive psychology interventions: A meta-analysis of randomized controlled studies. *BMC Public Health, 13*, 119. https://doi.org/10.1186/1471-2458-13-119 [↩](#cite-bolier-2013)

<a id="ref-button-2013"></a>
Button, K. S., Ioannidis, J. P. A., Mokrysz, C., et al. (2013). Power failure: Why small sample size undermines the reliability of neuroscience. *Nature Reviews Neuroscience, 14*, 365–376. https://doi.org/10.1038/nrn3475 [↩](#cite-button-2013)

<a id="ref-chambers-2022"></a>
Chambers, C. D., & Tzavella, L. (2022). The past, present and future of Registered Reports. *Nature Human Behaviour, 6*, 29–42. https://doi.org/10.1038/s41562-021-01193-7 [↩](#cite-chambers-2022)

<a id="ref-eronen-2021"></a>
Eronen, M. I., & Bringmann, L. F. (2021). The theory crisis in psychology: How to move forward. *Perspectives on Psychological Science, 16*(4), 779–788. https://doi.org/10.1177/1745691620970586 [↩](#cite-eronen-2021)

<a id="ref-gelman-2013"></a>
Gelman, A., & Loken, E. (2013). *The garden of forking paths: Why multiple comparisons can be a problem, even when there is no “fishing expedition” or “p-hacking” and the research hypothesis was posited ahead of time* [Unpublished manuscript]. https://stat.columbia.edu/~gelman/research/unpublished/p_hacking.pdf [↩](#cite-gelman-2013)

<a id="ref-hofman-2021"></a>
Hofman, J. M., Watts, D. J., Athey, S., et al. (2021). Integrating explanation and prediction in computational social science. *Nature, 595*, 181–188. https://doi.org/10.1038/s41586-021-03659-0 [↩](#cite-hofman-2021)

<a id="ref-huys-2016"></a>
Huys, Q. J. M., Maia, T. V., & Frank, M. J. (2016). Computational psychiatry as a bridge from neuroscience to clinical applications. *Nature Neuroscience, 19*, 404–413. https://doi.org/10.1038/nn.4238 [↩](#cite-huys-2016)

<a id="ref-kerr-1998"></a>
Kerr, N. L. (1998). HARKing: Hypothesizing after the results are known. *Personality and Social Psychology Review, 2*(3), 196–217. https://doi.org/10.1207/s15327957pspr0203_4 [↩](#cite-kerr-1998)

<a id="ref-klein-2018"></a>
Klein, R. A., Vianello, M., Hasselman, F., et al. (2018). Many Labs 2: Investigating variation in replicability across samples and settings. *Advances in Methods and Practices in Psychological Science, 1*(4), 443–490. https://doi.org/10.1177/2515245918810225 [↩](#cite-klein-2018)

<a id="ref-kotov-2021"></a>
Kotov, R., Krueger, R. F., Watson, D., et al. (2021). The Hierarchical Taxonomy of Psychopathology (HiTOP): A quantitative nosology based on consensus of evidence. *Annual Review of Clinical Psychology, 17*, 83–108. https://doi.org/10.1146/annurev-clinpsy-081219-093304 [↩](#cite-kotov-2021)

<a id="ref-lazer-2009"></a>
Lazer, D., Pentland, A., Adamic, L., et al. (2009). Computational social science. *Science, 323*(5915), 721–723. https://doi.org/10.1126/science.1167742 [↩](#cite-lazer-2009)

<a id="ref-meehan-2022"></a>
Meehan, A. J., Lewis, S. J., Fazel, S., et al. (2022). Clinical prediction models in psychiatry: A systematic review of two decades of progress and challenges. *Molecular Psychiatry, 27*, 2700–2708. https://doi.org/10.1038/s41380-022-01528-4 [↩](#cite-meehan-2022)

<a id="ref-moshontz-2018"></a>
Moshontz, H., et al. (2018). The Psychological Science Accelerator: Advancing psychology through a distributed collaborative network. *Advances in Methods and Practices in Psychological Science, 1*(4), 501–515. https://doi.org/10.1177/2515245918797607 [↩](#cite-moshontz-2018)

<a id="ref-nosek-2018"></a>
Nosek, B. A., Ebersole, C. R., DeHaven, A. C., & Mellor, D. T. (2018). The preregistration revolution. *Proceedings of the National Academy of Sciences, 115*(11), 2600–2606. https://doi.org/10.1073/pnas.1708274114 [↩](#cite-nosek-2018)

<a id="ref-oberauer-2019"></a>
Oberauer, K., & Lewandowsky, S. (2019). Addressing the theory crisis in psychology. *Psychonomic Bulletin & Review, 26*, 1596–1618. https://doi.org/10.3758/s13423-019-01645-2 [↩](#cite-oberauer-2019)

<a id="ref-osc-2015"></a>
Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science, 349*(6251), aac4716. https://doi.org/10.1126/science.aac4716 [↩](#cite-osc-2015)

<a id="ref-pashler-2012"></a>
Pashler, H., & Wagenmakers, E.-J. (2012). Editors’ introduction to the special section on replicability in psychological science: A crisis of confidence? *Perspectives on Psychological Science, 7*(6), 528–530. https://doi.org/10.1177/1745691612465253 [↩](#cite-pashler-2012)

<a id="ref-pulvermuller-2021"></a>
Pulvermüller, F., Tomasello, R., Henningsen-Schomers, M. R., & Wennekers, T. (2021). Biological constraints on neural network models of cognitive function. *Nature Reviews Neuroscience, 22*, 488–502. https://doi.org/10.1038/s41583-021-00473-5 [↩](#cite-pulvermuller-2021)

<a id="ref-ruths-2014"></a>
Ruths, D., & Pfeffer, J. (2014). Social media for large studies of behavior. *Science, 346*(6213), 1063–1064. https://doi.org/10.1126/science.346.6213.1063 [↩](#cite-ruths-2014)

<a id="ref-strauss-2009"></a>
Strauss, M. E., & Smith, G. T. (2009). Construct validity: Advances in theory and methodology. *Annual Review of Clinical Psychology, 5*, 1–25. https://doi.org/10.1146/annurev.clinpsy.032408.153639 [↩](#cite-strauss-2009)

<a id="ref-van-lissa-2023"></a>
Van Lissa, C. J. (2023). Developmental data science: How machine learning can advance theory formation in developmental psychology. *Infant and Child Development, 32*(6), e2370. https://doi.org/10.1002/icd.2370 [↩](#cite-van-lissa-2023)

<a id="ref-vohs-2021"></a>
Vohs, K. D., Schmeichel, B. J., Lohmann, S., et al. (2021). A multisite preregistered paradigmatic test of the ego-depletion effect. *Psychological Science, 32*(10), 1566–1581. https://doi.org/10.1177/0956797621989733 [↩](#cite-vohs-2021)

<a id="ref-wang-2020"></a>
Wang, X.-J., Hu, H., Huang, C., et al. (2020). Computational neuroscience: A frontier of the 21st century. *National Science Review, 7*(9), 1418–1422. https://doi.org/10.1093/nsr/nwaa129 [↩](#cite-wang-2020)

<a id="ref-yarkoni-2022"></a>
Yarkoni, T. (2022). The generalizability crisis. *Behavioral and Brain Sciences, 45*, e1. https://doi.org/10.1017/S0140525X20001685 [↩](#cite-yarkoni-2022)
