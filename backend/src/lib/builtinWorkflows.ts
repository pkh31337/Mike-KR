export const BUILTIN_WORKFLOWS: { id: string; title: string; prompt_md: string }[] = [
    // ─── 한국 특화 워크플로우 ─────────────────────────────────────────────────────
    {
        id: "builtin-kr-spa-summary",
        title: "주식매매계약서 요약",
        prompt_md:
            "## 주식매매계약서 종합 법률 요약\n\n" +
            "업로드된 주식매매계약서(SPA)를 검토하고 다음 항목별로 종합적인 법률 요약을 작성하세요. " +
            "각 항목에 대해 핵심 조항을 식별하고 관련 조문 번호를 인용하며, 비정형적이거나 불리한 조건은 별도로 표시하세요.\n\n" +
            "1. **당사자** — 매도인, 매수인, 대상회사의 전체 상호, 설립지, 역할\n" +
            "2. **대상 주식** — 매매 주식의 종류, 수량, 비율 (완전 희석 기준 포함)\n" +
            "3. **매매대금** — 총 거래대금, 통화, 지급 구조 (계약금/중도금/잔금 또는 일시불), 가격조정 메커니즘(완결계정, 잠금상자 방식 등)\n" +
            "4. **선행조건(CP)** — 완결을 위한 주요 선행조건 목록, 충족 또는 포기 주체, 롱스톱 날짜\n" +
            "5. **진술 및 보장** — 보장 제공 당사자, 범위(사업 보장 및 권원 보장), 기준 시점, 손해배상 청구 제한(시효, 최소 청구금액, 상한)\n" +
            "6. **손해배상** — 특정 손해배상 조항, 제공 당사자, 대상 잠재 채무, 시효 및 상한\n" +
            "7. **책임 제한** — 총 책임 상한(산정 방식 포함), 기본 보장과 특정 손해배상 간 별도 상한 여부, 최소 청구금액(De Minimis 및 Basket), 청구 시효\n" +
            "8. **경업금지** — 경업금지 및 거래처/임직원 유인금지 약정 대상자, 제한 범위(업종 및 지역), 존속 기간\n" +
            "9. **비밀유지** — 비밀유지 의무 범위, 허용 공개 대상, 존속 기간\n" +
            "10. **한국 상법 준거 여부** — 상법 제374조(주요 영업 양도 결의), 제469조(사채 발행) 등 관련 조항 충족 여부 확인\n" +
            "11. **준거법 및 분쟁해결** — 준거법(대한민국 법률 또는 기타), 분쟁해결 방식(소송 또는 중재), 관할 법원 또는 중재 기관\n\n" +
            "채팅 응답에 요약을 인라인으로 제공하고, 사용자가 명시적으로 요청하는 경우에만 Word 문서를 생성하세요.",
    },
    {
        id: "builtin-kr-labor-review",
        title: "근로계약서 검토",
        prompt_md:
            "## 근로계약서 법률 검토\n\n" +
            "업로드된 근로계약서를 검토하고 근로기준법 및 관련 법령 준수 여부를 분석하세요. " +
            "각 항목에 대해 관련 법령 조문을 인용하고, 법위반 사항 또는 근로자에게 불리한 조항은 명확히 표시하세요.\n\n" +
            "1. **당사자** — 사용자(갑)와 근로자(을)의 인적사항, 사업장 소재지\n" +
            "2. **근로조건 명시 의무** — 근로기준법 제17조 필수 기재사항(임금, 소정근로시간, 휴일, 연차유급휴가, 취업 장소, 종사 업무, 취업규칙 등) 누락 여부 확인\n" +
            "3. **임금** — 기본급, 각종 수당, 지급 시기, 최저임금법 준수 여부, 포괄임금제 유효성\n" +
            "4. **근로시간** — 소정근로시간(주 52시간 초과 여부), 연장·야간·휴일근로 가산수당, 탄력근로제/선택근로제 조항\n" +
            "5. **휴일 및 휴가** — 주휴일, 법정공휴일, 연차유급휴가(근로기준법 제60조), 출산·육아휴직(남녀고용평등법)\n" +
            "6. **수습·시용기간** — 수습기간 설정의 적법성, 최저임금의 90% 적용 요건(3개월 이내)\n" +
            "7. **경업금지 약정** — 근로계약 기간 중 및 퇴직 후 경업금지 약정의 유효성(근로자의 생계 위협 여부, 합리적 보상 여부)\n" +
            "8. **퇴직금** — 근로자퇴직급여 보장법 준수 여부, DC형/DB형 퇴직연금 조항\n" +
            "9. **계약 해지** — 해고 제한(근로기준법 제23조), 해고 예고(제26조), 해고 사유, 부당해고 위험성 검토\n" +
            "10. **비밀유지 및 지식재산권** — 영업비밀 보호(부정경쟁방지법), 직무발명 보상(발명진흥법)\n" +
            "11. **준거법** — 대한민국 근로기준법 적용 여부, 외국 준거법 약정의 유효성\n\n" +
            "법위반이 의심되거나 근로자에게 불리한 조항은 각 항목 말미에 [주의] 표시와 함께 개선 방향을 제시하세요.\n" +
            "채팅 응답에 검토 결과를 인라인으로 제공하세요.",
    },
    {
        id: "builtin-kr-real-estate-review",
        title: "부동산 매매계약서 검토",
        prompt_md:
            "## 부동산 매매계약서 법률 검토\n\n" +
            "업로드된 부동산 매매계약서를 검토하고 다음 항목별로 분석하세요.\n\n" +
            "1. **당사자** — 매도인(갑)과 매수인(을)의 인적사항 및 대리인 여부\n" +
            "2. **매매 목적물** — 부동산의 표시(소재지, 지번, 지목, 면적), 등기부등본과의 일치 여부\n" +
            "3. **매매대금** — 총 매매대금, 계약금·중도금·잔금 구조 및 지급 시기\n" +
            "4. **소유권이전등기** — 등기 시기, 매도인의 서류 제공 의무, 잔금 지급과의 동시이행 여부\n" +
            "5. **하자담보책임** — 민법 제580조 하자담보책임 약정, 고지의무 위반 여부, 현황 확인서 첨부 여부\n" +
            "6. **임차인 현황** — 주택임대차보호법 또는 상가건물임대차보호법 적용 여부, 임차인 명도 조건, 보증금 승계 여부\n" +
            "7. **부동산 공법상 제한** — 용도지역, 건폐율, 용적률, 개발행위허가 제한 등 공법상 규제 고지 여부\n" +
            "8. **융자 및 근저당** — 기존 융자·근저당 처리 방법(잔금 시 말소 또는 승계)\n" +
            "9. **계약 해제 및 위약금** — 계약 해제 사유, 계약금 배액 배상(민법 제565조), 위약금 약정\n" +
            "10. **특약 조항** — 표준 계약서 외 특약 내용, 불리하거나 모호한 특약 분석\n" +
            "11. **세금** — 취득세, 양도소득세, 부가가치세(사업용 부동산) 부담 주체\n\n" +
            "채팅 응답에 검토 결과를 인라인으로 제공하세요.",
    },
    {
        id: "builtin-kr-lease-review",
        title: "임대차계약서 검토",
        prompt_md:
            "## 임대차계약서 법률 검토\n\n" +
            "업로드된 임대차계약서를 검토하고 주택임대차보호법(주임법) 또는 상가건물임대차보호법(상임법) 준수 여부를 분석하세요.\n\n" +
            "1. **계약 유형** — 주택 임대차(주임법 적용) 또는 상가 임대차(상임법 적용) 구분\n" +
            "2. **당사자** — 임대인(갑)과 임차인(을)의 인적사항\n" +
            "3. **임대 목적물** — 부동산 표시, 임대 면적, 용도\n" +
            "4. **보증금 및 차임** — 보증금 금액, 월차임, 지급 시기 및 방법\n" +
            "5. **임대 기간** — 계약 기간, 법정 최단 기간 준수 여부(주택: 2년, 상가: 1년)\n" +
            "6. **대항력 요건** — 전입신고 및 확정일자 안내 조항, 임차권등기명령 권리 안내\n" +
            "7. **계약갱신청구권** — 계약갱신청구권 행사 기간(주택: 2+2년, 상가: 최초 10년), 거절 사유\n" +
            "8. **전월세상한제** — 보증금/차임 인상 상한(5%) 준수 여부(계약갱신 시)\n" +
            "9. **시설 수리** — 임대인의 수선 의무 범위, 임차인의 원상회복 의무\n" +
            "10. **계약 해지** — 해지 통보 기간, 임대인의 계약 해지 사유, 보증금 반환 시기\n" +
            "11. **특약 조항** — 임차인에게 불리한 특약(임차인의 법정 권리를 포기시키는 조항 유효성 검토)\n\n" +
            "법위반 또는 임차인에게 불리한 조항은 [주의] 표시와 함께 관련 법령 조문을 인용하세요.\n" +
            "채팅 응답에 검토 결과를 인라인으로 제공하세요.",
    },
    {
        id: "builtin-kr-loan-summary",
        title: "대출약정서 요약 (한국)",
        prompt_md:
            "## 대출약정서(여신약정서) 법률 요약\n\n" +
            "업로드된 대출약정서 또는 여신약정서를 검토하고 다음 항목별로 종합적인 법률 요약을 작성하세요.\n\n" +
            "1. **당사자** — 대주(금융기관), 차주, 보증인의 전체 상호 및 역할\n" +
            "2. **여신 금액 및 통화** — 대출 원금, 통화(원화/외화)\n" +
            "3. **금리** — 기준금리(한국은행 기준금리, CD금리, SOFR 등), 가산금리, 금리 변경 메커니즘, 연체이자율\n" +
            "4. **대출 기간 및 만기** — 대출 기간, 최종 만기일\n" +
            "5. **상환 방법** — 원금 분할상환 또는 만기일시상환, 상환 일정, 중도상환 수수료\n" +
            "6. **담보** — 제공 담보의 종류(부동산 근저당, 동산 질권, 예금 담보 등), 담보 설정 순위, 담보 비율\n" +
            "7. **보증** — 보증인의 범위, 보증 한도(연대보증 또는 한정보증), 보증인 보호(보증인 보호를 위한 특별법 준수 여부)\n" +
            "8. **기한이익상실** — 기한이익상실 사유(은행여신거래기본약관 제7조 준거 여부), 기한이익상실의 종류(당연 상실 vs. 청구에 의한 상실)\n" +
            "9. **재무약정(Financial Covenants)** — 재무비율 유지 의무(부채비율, 이자보상비율 등), 측정 주기, equity cure 권리\n" +
            "10. **선행조건(CP)** — 대출 실행 전 충족해야 할 선행조건 목록\n" +
            "11. **진술 및 보장** — 차주의 주요 진술 및 보장 내용, 위반 시 효과\n" +
            "12. **준거법 및 분쟁해결** — 준거법, 관할 법원 또는 중재 기관\n" +
            "13. **여신전문금융업법 관련** — 카드사·캐피탈사 등 여전법 규제 적용 여부 확인\n\n" +
            "채팅 응답에 요약을 인라인으로 제공하세요.",
    },
    {
        id: "builtin-kr-minutes-review",
        title: "이사회·주주총회 의사록 검토",
        prompt_md:
            "## 이사회·주주총회 의사록 법률 검토\n\n" +
            "업로드된 이사회 의사록 또는 주주총회 의사록을 검토하고 상법 준수 여부를 분석하세요.\n\n" +
            "1. **의사록 유형** — 이사회 의사록 또는 주주총회(정기/임시) 의사록 구분\n" +
            "2. **법정 기재사항** — 상법 제373조(이사회 의사록) 또는 제373조(주주총회 의사록) 필수 기재사항 누락 여부 확인:\n" +
            "   - 개최 일시 및 장소, 이사 또는 주주 출석 현황, 의안 및 결의 내용, 의장 및 출석 이사/의결권 주주 서명\n" +
            "3. **소집 절차** — 소집 통지 기간(이사회: 1주 전, 주주총회: 2주 전), 소집 권한자 적법성\n" +
            "4. **정족수 충족** — 결의 요건 충족 여부:\n" +
            "   - 이사회: 이사 과반수 출석 및 출석 이사 과반수 찬성(상법 제391조)\n" +
            "   - 주주총회 보통결의: 출석주주 의결권 과반수 + 발행주식총수의 1/4 이상(상법 제368조)\n" +
            "   - 주주총회 특별결의: 출석주주 의결권 2/3 이상 + 발행주식총수의 1/3 이상(상법 제434조)\n" +
            "5. **의결 사항 분류** — 결의 사항이 보통결의·특별결의·특수결의 중 어느 것에 해당하는지 확인\n" +
            "6. **이해관계인 의결권 배제** — 특별이해관계 있는 이사 또는 주주의 의결권 배제 여부(상법 제391조 제3항, 제368조 제3항)\n" +
            "7. **안건별 결의 내용** — 각 안건의 결의 내용, 반대 이사/주주 기재 여부\n" +
            "8. **필요 후속 조치** — 결의 사항의 이행을 위한 등기 또는 신고 필요 여부 확인\n\n" +
            "법위반 또는 흠결이 있는 사항은 [주의] 표시와 함께 관련 조문을 인용하세요.\n" +
            "채팅 응답에 검토 결과를 인라인으로 제공하세요.",
    },
    {
        id: "builtin-kr-legal-opinion",
        title: "법률의견서 작성",
        prompt_md:
            "## 법률의견서 작성\n\n" +
            "업로드된 관련 문서(계약서, 사실관계 요약서 등)를 검토하고 다음 구조로 법률의견서(Legal Opinion)를 작성하세요. " +
            "generate_docx 도구를 사용하여 다운로드 가능한 Word 문서로 생성하세요.\n\n" +
            "법률의견서 구조:\n" +
            "1. **수신** — 의뢰인명 및 제목(예: '○○주식회사 귀중')\n" +
            "2. **제목** — 법률검토 의견서 제목(예: '○○계약 관련 법률 검토 의견')\n" +
            "3. **검토 목적 및 범위** — 검토를 의뢰받은 사항, 검토 범위 및 전제 사항\n" +
            "4. **사실관계 요약** — 제공받은 자료에 기반한 관련 사실관계 정리\n" +
            "5. **관련 법령 검토** — 적용 가능한 법령(근거 조문 포함), 관련 규제 또는 행정 해석\n" +
            "6. **판례 분석** — 관련 대법원 및 하급심 판례 검토(사건번호 및 판결 요지 포함)\n" +
            "7. **법률 의견** — 쟁점별 법률 분석 및 의견\n" +
            "8. **결론 및 권고사항** — 종합 의견 및 실무적 권고사항\n" +
            "9. **면책 조항** — '본 법률의견서는 의뢰인의 요청에 따라 제공된 자료에 기반하여 작성된 것으로, 새로운 사실 또는 법령 변경에 따라 변경될 수 있습니다.'\n" +
            "10. **참고 법령 목록** — 검토에 활용된 법령 목록\n\n" +
            "문서 말미에는 작성일, 법무법인명/담당 변호사 서명란(한국 형식)을 포함하세요.",
    },
    // ─── 기존 영문 워크플로우 ──────────────────────────────────────────────────
    {
        id: "builtin-cp-checklist",
        title: "Generate CP Checklist",
        prompt_md:
            "## Generate Conditions Precedent Checklist\n\n" +
            "Review the uploaded credit agreement or financing document and generate a comprehensive " +
            "Conditions Precedent (CP) checklist.\n\n" +
            "You MUST use the generate_docx tool to produce the checklist as a downloadable Word document. " +
            "You MUST pass landscape: true to the generate_docx tool — the document must be in landscape orientation. " +
            "Do not display the checklist inline — generate the .docx file and provide the download link.\n\n" +
            "Structure the document as follows:\n" +
            "- For each category of conditions (e.g. Corporate, Financial, Legal, Security), add a section with a heading\n" +
            "- Under each category heading, include a table with exactly these four columns in this order:\n" +
            "  1. Index — sequential number within the category (1, 2, 3…)\n" +
            "  2. Clause Number — the clause or schedule reference from the agreement\n" +
            "  3. Clause — a concise description of the condition precedent\n" +
            "  4. Status — leave blank (empty string) for the user to fill in\n\n" +
            "Use the table field in the section object (not content) for each category's rows.\n\n" +
            "Before finalizing, double-check that every table is formatted correctly: each table must have exactly the four columns above in the same order, headers must match exactly (Index, Clause Number, Clause, Status), every row must have the same number of cells as the headers, the Index column must be sequential starting from 1 within each category, and no cells should contain stray markdown, newlines, or placeholder text (use an empty string for Status).",
    },
    {
        id: "builtin-credit-summary",
        title: "Credit Agreement Summary",
        prompt_md:
            "## Credit Agreement Summary\n\n" +
            "Review the uploaded credit agreement and produce a comprehensive legal summary covering the following topics. " +
            "For each section, identify the key provisions, quote the relevant clause or schedule references, and flag any unusual, onerous, or non-market terms.\n\n" +
            "1. **Lenders** — All lenders or members of the lender syndicate, including their full legal name and role (e.g. mandated lead arranger, original lender, agent bank)\n" +
            "2. **Borrowers** — All borrowers, including their full legal name and jurisdiction of incorporation\n" +
            "3. **Guarantors** — All guarantors, including their full legal name and the scope of their guarantee obligation\n" +
            "4. **Other Parties** — Any other material parties (e.g. facility agent, security agent, hedge counterparties, issuing bank) and their roles\n" +
            "5. **Date of Agreement** — Date of the credit agreement\n" +
            "6. **Facilities** — Each facility available (e.g. Revolving Credit Facility, Term Loan A, Term Loan B, Term Loan C), the facility type, tranche name, and any key structural features\n" +
            "7. **Amount** — Total committed amount across all facilities, the currency, and breakdown by tranche if applicable\n" +
            "8. **Purpose** — Stated purpose for which borrowings may be used and any restrictions on use of proceeds\n" +
            "9. **Interest** — Applicable reference rate (e.g. SOFR, EURIBOR, base rate), the margin, any margin ratchet mechanism, and how interest periods are structured\n" +
            "10. **Commitment Fee** — Commitment or utilisation fees, the applicable rate, how they are calculated, and the basis (e.g. undrawn commitment, average utilisation)\n" +
            "11. **Repayment Schedule** — Repayment profile for each facility, whether by scheduled instalments or bullet repayment, and the repayment dates and amounts\n" +
            "12. **Maturity** — Final maturity date for each facility\n" +
            "13. **Security** — Each class of security granted or required (e.g. share pledges, fixed and floating charges, real estate mortgages, account pledges) and the assets or entities over which security is taken\n" +
            "14. **Guarantees** — Guarantee obligations, the guarantors, the scope of the guarantee, and any limitations (e.g. up-stream guarantee limitations, guarantor coverage test)\n" +
            "15. **Financial Covenants** — Each financial covenant, the metric (e.g. leverage ratio, interest cover, cashflow cover), the applicable test, testing frequency, and any equity cure rights\n" +
            "16. **Events of Default** — Each event of default, noting any grace periods, materiality thresholds, or cross-default provisions\n" +
            "17. **Assignment** — Restrictions or permissions on assignment or transfer (e.g. white/blacklists, borrower consent for lender transfers; restrictions on borrower assignment)\n" +
            "18. **Change of Control** — What constitutes a change of control, what obligations it triggers (e.g. mandatory prepayment, cancellation, lender consent), and any cure period\n" +
            "19. **Prepayment Fee** — Any prepayment fees, make-whole premiums, or soft-call protections, the applicable fee, the period during which it applies, and any exceptions (e.g. prepayment from insurance proceeds or asset disposals)\n" +
            "20. **Governing Law** — Governing law of the agreement\n" +
            "21. **Dispute Resolution** — Whether disputes go to litigation or arbitration, the chosen forum or seat, and any submission to jurisdiction provisions\n\n" +
            "Deliver the summary inline in your chat response — do NOT call generate_docx. Only produce a downloadable Word document if the user explicitly asks for one.",
    },
    {
        id: "builtin-sha-summary",
        title: "Shareholder Agreement Summary",
        prompt_md:
            "## Shareholder Agreement Summary\n\n" +
            "Review the uploaded shareholder agreement and produce a comprehensive legal summary covering the following topics. " +
            "For each section, identify the key provisions, quote the relevant clause references, and flag any unusual, onerous, or market-standard deviations.\n\n" +
            "1. **Parties & Shareholdings** — Full legal names, roles, share classes held, and percentage interests (on a fully diluted basis if stated)\n" +
            "2. **Share Classes & Rights** — For each class: voting rights, dividend rights, liquidation preference, conversion or redemption features\n" +
            "3. **Board Composition & Governance** — Board size, director appointment rights (and the shareholding thresholds required to maintain them), quorum, and casting vote\n" +
            "4. **Reserved Matters** — Decisions requiring a special majority, unanimity, or a specific shareholder's consent; note the threshold and whose consent is required for each\n" +
            "5. **Pre-emption on New Shares** — Who holds pre-emption rights, procedure, timeline, and any carve-outs (e.g. employee option schemes)\n" +
            "6. **Transfer Restrictions** — Lock-up periods, prohibited transfers, permitted transfers (e.g. to affiliates), and any board or shareholder approval requirements\n" +
            "7. **Right of First Refusal / Pre-emption on Transfer** — Trigger, procedure, pricing mechanics, and any exceptions\n" +
            "8. **Drag-Along Rights** — Who holds the right, threshold to trigger, conditions (e.g. minimum price, independent valuation), and minority protections\n" +
            "9. **Tag-Along Rights** — Who holds the right, triggering threshold, exercise procedure, and price terms\n" +
            "10. **Anti-Dilution Protections** — Type (full ratchet, weighted average), trigger events, calculation mechanics, and exceptions\n" +
            "11. **Dividend Policy** — Any obligation or target to pay dividends, preferential dividend rights, and restrictions on distributions\n" +
            "12. **Exit & Liquidity** — Agreed exit routes (trade sale, IPO, drag sale), timelines, and liquidation preferences on exit\n" +
            "13. **Deadlock** — Deadlock definition, escalation and resolution mechanisms (e.g. Russian roulette, put/call options), and consequences if unresolved\n" +
            "14. **Non-Compete & Non-Solicitation** — Who is bound, scope of activities and geography, duration, and carve-outs\n" +
            "15. **Governing Law & Dispute Resolution** — Applicable law, forum, arbitration or litigation, and any mandatory escalation steps\n\n" +
            "Generate the summary as a downloadable Word document.",
    },
];
