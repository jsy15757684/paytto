// Multilingual Translation Dictionary
const i18n = {
    ko: {
        "nav-group-about": "기업 소개",
        "nav-company-intro": "회사 개요",
        "nav-group-materials": "원자재 사업부",
        "nav-gold": "금 (Gold)",
        "nav-aluminum": "알루미늄 (Al)",
        "nav-copper": "구리 (Copper)",
        "nav-coal": "석탄 (Coal)",
        "nav-group-mobility": "모빌리티 사업부",
        "nav-automotive": "중국 수입차 유통",
        "nav-group-energy": "신사업 & 미래 기술",
        "nav-energy-special": "에너지 & 특수 모빌리티",
        "nav-group-partnership": "파트너십",
        "nav-contact": "협력 문의",
        "ticker-title": "원자재 실시간 시세",
        "trading-active": "Global Trading Active",
        "copyright": "© 2026 PAYTTO Co., Ltd. All rights reserved.",
        "header-consult-btn": "파트너 실시간 상담",
        
        // Intro Section
        "hero-badge": "EST. 2013",
        "hero-title": "글로벌 자원의 혁신과<br>미래 모빌리티의 융합",
        "hero-desc": "페이또(PAYTTO)는 천연 원자재 트레이딩 역량과 독자적인 하드웨어 설계 능력을 바탕으로, 원자재 조달부터 미래형 모빌리티 제조까지 수직계열화된 가치를 창출하는 혁신 기업입니다.",
        "hero-btn-primary": "모빌리티 알아보기",
        "hero-btn-secondary": "원자재 사업부",
        "core-value-title": "페이또의 핵심 사업 역량",
        "core-value-desc": "원자재와 모빌리티가 조화롭게 결합된 페이또의 주요 비즈니스 포트폴리오입니다.",
        "value-card1-title": "원자재 공급망 리더십",
        "value-card1-desc": "금, 알루미늄, 구리, 석탄 등 첨단 제조 및 에너지 인프라에 필수적인 핵심 자원들을 안정적이고 효율적으로 공급합니다.",
        "value-card2-title": "독자적 미래형 모빌리티",
        "value-card2-desc": "페이또의 초경량 알루미늄 가공재와 구리 전도 파츠를 결합하여 차세대 스마트 친환경 자동차와 전기 세단을 직접 설계·제조합니다.",
        "value-card3-title": "글로벌 파트너십 네트워크",
        "value-card3-desc": "전 세계 광산 메이저 및 완성차 브랜드와의 전략적 제휴를 통해 혁신적인 공급 체인 다변화를 추진합니다.",
        "more-btn": "더 알아보기",
        "stat-label-trade": "글로벌 무역액 (USD)",
        "stat-label-network": "글로벌 공급 네트워크",
        "stat-label-vol": "연간 원자재 취급량",
        "stat-label-purity": "최상위 소재 순도 검증",
        
        // Gold Section
        "gold-media-caption": "페이또 보증 999.9 파인 골드 실물",
        "gold-cat-tag": "Safe Haven Asset",
        "gold-product-title": "실물 골드 & 고부가가치 산업용 금 무역",
        "gold-product-desc": "페이또는 글로벌 거시 경제 리스크 헤지를 위한 최상급 실물 금괴(Gold Bullion)를 안전하게 공급하며, 반도체 및 첨단 전자 디바이스의 기판 배선용 고순도 골드 스퍼터링 타겟과 본딩 와이어 공급망을 확보하고 있습니다.",
        "gold-bullet1": "LBMA(런던귀금속시장연합회) 딜리버리 표준 보증 99.99% 골드바 공급",
        "gold-bullet2": "글로벌 스마트 시큐리티 금고 연동 및 보험 보장 안전 보관 시스템 제공",
        "gold-bullet3": "차세대 전기차 전장 부품 내식성 향상을 위한 마이크로 골드 본딩 소재 납품",
        "gold-table-use1": "헤지 자산, 금융권 예치, 실물 투자",
        "gold-table-use2": "반도체 리드프레임 접합, 미세 배선",
        "gold-table-use3": "디스플레이 박막 증착, 연구용 코팅",
        
        // Aluminum Section
        "al-media-caption": "페이또 글로벌 터미널의 알루미늄 자재 하역 공정",
        "al-cat-tag": "Eco & Lightweight",
        "al-product-title": "미래 산업의 뼈대, 초경량 하이테크 알루미늄",
        "al-product-desc": "환경 규제와 친환경 에너지 시대의 핵심인 '경량화'를 위한 고성능 알루미늄 합금을 가공 및 유통합니다. 페이또의 고인장 알루미늄 프레스 플레이트와 고압 다이캐스팅 압출재는 배터리 팩 케이스와 미래 모빌리티 섀시의 구조적 핵심을 구성합니다.",
        "al-bullet1": "초경량 고강성 6000계 및 7000계 하이테크 항공·우주 합금 라인업 구축",
        "al-bullet2": "전기차(EV) 배터리 하우징 세이프티 가드용 고열전도도 압출 프로파일 공급",
        "al-bullet3": "친환경 재생 알루미늄(Green Aluminum) 도입을 통한 저탄소 ESG 공급망 실현",
        "al-table-hdr-series": "합금 번호 (Series)",
        "al-table-hdr-prop": "기계적 성질",
        "al-table-prop1": "우수한 성형성 & 내식성",
        "al-table-use1": "자동차 아우터 판넬, 전기차 배터리 팩 케이스",
        "al-table-prop2": "초고인장 강도, 내구력",
        "al-table-use2": "항공기 동체 구조재, 방산 부품, 차체 범퍼빔",
        "al-table-prop3": "탄소 배출량 75% 절감",
        "al-table-use3": "IT 기기 외장재, ESG 지향 완성차 프레임",
        
        // Copper Section
        "copper-media-caption": "고순도 무산소 구리 튜브 및 와이어 루프",
        "copper-cat-tag": "Electrification Core",
        "copper-product-title": "전기차 혁명과 그리드망의 신경망, 구리(Copper)",
        "copper-product-desc": "구리는 신재생에너지 인프라, 전력망 송전선, 그리고 전기 모터 구동의 필수 불가결한 혈관입니다. 페이또는 전기차 모터 고정자 코일에 필수적인 99.999% 무산소동(OFC) 전기동과 극박 구리 포일(동박)의 원활한 글로벌 수급 체계를 유지하고 있습니다.",
        "copper-bullet1": "초고전도도 99.99% 전기동(LME Grade A 동음극) 글로벌 벌크 무역",
        "copper-bullet2": "전기차 배터리 음극 집전체용 나노미터급 초정밀 구리박(동박) 라인 확보",
        "copper-bullet3": "송배전 그리드 케이블 및 산업용 변압기 전도체 압출동 로드 생산 납품",
        "copper-table-hdr-material": "소재명 (Material)",
        "copper-table-hdr-cond": "전도도 (IACS)",
        "copper-table-hdr-spec": "특수 스펙 및 적용",
        "copper-table-use1": "전기차 구동모터 헤어핀 코일, 정밀 오디오 케이블",
        "copper-table-use2": "LME 등록 A등급 케소드, 신선 가공 원자재",
        "copper-table-cond3": "고강도/고연신율",
        "copper-table-use3": "리튬 이온 이차전지 음극 집전박 (4.5~8μm 두께)",
        
        // Coal Section
        "coal-media-caption": "페이또 벌크 항만 부두에 하역된 고열량 무연탄 입자",
        "coal-cat-tag": "Industrial Energy",
        "coal-product-title": "산업 동력원, 고효율 청정 탄소 제철 및 발전 무역",
        "coal-product-desc": "현대 기초 제조 공정의 정수이며 철강 생산의 주원료인 점결탄(Coking Coal) 및 청정 친환경 발전용 고발열량 유연탄을 아시아-태평양 전역에 공급합니다. 페이또는 엄격한 성분 정밀 분석을 통해 환경 오염 유발 가스 유출량이 현저히 적은 친환경 청정 석탄 공급 라인업을 확보하고 있습니다.",
        "coal-bullet1": "용광로(고로) 코크스 원료가 되는 프리미엄 강점결탄(Hard Coking Coal) 직수입",
        "coal-bullet2": "질소산화물 및 황 함유량이 매우 낮아 탄소 포집(CCUS)에 용이한 청정 무연탄 공급",
        "coal-bullet3": "실시간 모니터링을 동반한 해상 물류 벌크선 차터링 서비스 연계",
        "coal-table-hdr-type": "종류 (Category)",
        "coal-table-hdr-cal": "발열량 (Calorific Value)",
        "coal-table-hdr-prop": "성분 특이사항",
        "coal-table-cal1": "제철야금용 고품격",
        "coal-table-prop1": "낮은 회분(Ash < 9.5%), 저유황, 고결합성",
        "coal-table-prop2": "저회분, 고발열량, 저지발화성 발전용",
        "coal-table-cal3": "7,500 kcal/kg 이상",
        "coal-table-prop3": "최상급 무연탄, 철강 가탄제 및 특수 화학공업 원료",
        
        // Automotive Section
        "auto-badge": "중국 수입차 유통 사업부",
        "auto-hero-title": "PAYTTO 중국 수입차 글로벌 유통",
        "auto-hero-desc": "페이또는 중국의 유수 스마트 전기차 브랜드와의 긴밀한 파트너십을 바탕으로, 고성능 친환경 차량의 수입, 통관, 인증 및 국내 전역 유통망 비즈니스를 수행합니다.",
        "auto-grid-title": "유통 플랫폼 핵심 역량",
        "auto-grid-desc": "글로벌 공급망과 통관 전문성을 결합한 페이또만의 독자적인 수입차 유통 프로세스입니다.",
        "auto-tech1-title": "통합 통관 & 인증 원스톱 서비스",
        "auto-tech1-desc": "국내 법규에 맞춘 신속한 환경부/국토부 인증 절차 및 배터리 안전 보증 검사 대행 시스템을 갖추고 있습니다.",
        "auto-tech2-title": "전국 단위 딜러 & AS 네트워크",
        "auto-tech2-desc": "주요 거점 도시별 오프라인 전시장 및 공인 서비스 센터와의 협력을 통해 수입 전기차 전용 차량 관리 솔루션을 제공합니다.",
        "auto-tech3-title": "스마트 차량 물류 시스템",
        "auto-tech3-desc": "항만 하역부터 최종 인도까지 특수 탁송 캐리어 차량 및 실시간 위치 관제 솔루션을 통해 차량 훼손 없는 안전 유통을 보증합니다.",
        "auto-perf-val1": "수입 브랜드",
        "auto-perf-lbl1": "파트너 제조사",
        "auto-perf-val2": "15,000대+",
        "auto-perf-lbl2": "연간 유통 Capa",
        "auto-perf-val3": "평균 5일 이내",
        "auto-perf-lbl3": "통관 및 검사 소요일",
        
        // Contact Section
        "contact-info-title": "PAYTTO 비즈니스<br>협력 및 문의",
        "contact-info-desc": "원자재 대량 공급 계약, 전기차 위탁 제조 협력, 파트너십 구축 등 페이또의 글로벌 전략 협력 담당자가 신속히 안내해 드리겠습니다.",
        "contact-ch1-title": "본사 소재지",
        "contact-ch1-desc": "서울특별시 강서구 마곡중앙6로 40 (마곡동, 장흥빌딩) 702호 페이또",
        "contact-ch2-title": "글로벌 트레이딩 데스크",
        "contact-ch3-title": "비즈니스 문의 이메일",
        "form-label-name": "성명 *",
        "form-ph-name": "성명을 입력해 주세요.",
        "form-label-company": "회사명 *",
        "form-ph-company": "예: 페이또 모빌리티",
        "form-label-email": "이메일 주소 *",
        "form-label-type": "문의 사업부 *",
        "form-opt-select": "선택해 주세요.",
        "form-opt-mat": "원자재 구매 (금, 알루미늄, 구리, 석탄)",
        "form-opt-auto": "모빌리티/자동차 사업 협력",
        "form-opt-ir": "투자 유치 및 IR",
        "form-opt-other": "기타 비즈니스 협력",
        "form-label-msg": "문의 상세내용 *",
        "form-ph-msg": "구체적인 원자재 필요 규격 또는 제휴 제안 내용을 기재해주시면 담당자가 빠른 시일 내로 연락드립니다.",
        "form-btn-submit": "협력 요청서 전송",
        
        // Profile PDF Extended Data
        "ceo-title": "대표이사 인사말",
        "ceo-name": "CEO 양기웅 (Kiwoong Yang)",
        "ceo-quote": "“Green Mobility, Vision for Future”",
        "ceo-desc": "페이또는 2013년 설립 이래 한중 친환경 무역의 교두보이자 고성능 모빌리티, 신재생 에너지, 원자재 트레이딩 및 자원 순환 시스템을 선도하는 글로벌 산업 솔루션 기업입니다.",
        "subsidiary-title": "페이또 그룹 주요 자회사",
        "subsidiary-desc": "수입차 유통, 이커머스, A/S 네트워크 및 모빌리티 컨설팅을 전개하는 페이또의 핵심 자회사 생태계입니다.",
        "al-volume": "월 20,000톤 (연 24만 톤)",
        "copper-volume": "월 5,000톤 (연 6만 톤)",
        "coal-volume": "연 1,500,000톤 공급",
        "oil-cat-tag": "Energy & Resources",
        "oil-product-title": "글로벌 에너지 트레이딩, 원유 (Crude Oil)",
        "oil-product-desc": "글로벌 공급망 네트워크를 기반으로 월 100,000톤 이상의 원유 및 석유계 원자재를 안정적으로 수급 및 유통합니다.",
        "oil-volume": "월 100,000톤 (연 120만 톤)",
        "auto-military-badge": "국방부 독점 공급 계약",
        "auto-military-title": "국방부 복지단 전기차 공식 독점 공급",
        "auto-military-desc": "국방부 복지단 연계 친환경 전기차 초기 3,000대 독점 공급 확정 및 2026년 5천대 → 2027년 1.5만대 → 2028년 3만대 로드맵 추진 중.",
        "auto-dealer-spec": "전국 8개 거점 48개 대리점 & A/S망",
        "energy-hero-badge": "NEXT ENERGY & SPECIAL MOBILITY",
        "energy-hero-title": "자원 순환 & 미래 특수 모빌리티",
        "energy-hero-desc": "폐배터리 리사이클링(Black Mass), 글로벌 100MW 태양광 발전소, 수륙양용 전기카트 및 인명구조 드론, 우주 캡슐 모듈러 하우징으로 미래 지속가능한 산업 가치를 창출합니다.",
        "tech-battery-title": "폐배터리 재활용 & 자원 순환",
        "tech-battery-desc": "사용후 전기차 배터리를 수거하여 블랙매스(Black Mass)를 추출하고 리튬, 니켈 등 핵심 자원 공급망을 구축합니다.",
        "tech-solar-title": "100MW 글로벌 태양광 & 수상 양식",
        "tech-solar-desc": "카자흐스탄, 우즈베키스탄, 베트남 등지에서 100MW급 태양광 발전소 단지 건설 및 태양광 결합 친환경 수상 양식 프로젝트를 전개합니다.",
        "tech-amphibious-title": "수륙양용 전기차 & 구조 드론",
        "tech-amphibious-desc": "킨텍스(KINTEX) 전시 출품 수륙양용 전기카트 및 골든타임 수중 인명구조용 특수 드론(JX-6A)을 제조 공급합니다.",
        "tech-capsule-title": "스마트 우주 캡슐 & 특수 트레일러",
        "tech-capsule-desc": "관광/캠핑/오피스용 모듈러 스마트 우주 캡슐(Space Capsule) 및 스포츠카/특수장비 전용 트레일러 커스텀 솔루션을 제공합니다.",
        
        // 100% PDF Section 01 Full Dataset (KO)
        "pdf-milestone-title": "페이또 주요 연혁 및 성장 타임라인",
        "pdf-milestone-desc": "2013년 설립 이래 한중 친환경 무역 및 글로벌 모빌리티 시장을 개척해온 페이또의 발자취입니다.",
        "pdf-m1": "2013년 한중 우호 무역의 교두보를 목표로 페이또(PAYTTO) 설립 (경기도 고양시 소재)",
        "pdf-m2": "몽골산 석탄의 중국 화력발전소 최초 공급 물류 성과 달성",
        "pdf-m3": "왕홍(Wanghong) 인플루언서 마케팅 및 국내 경쟁력 있는 원자재 무역 전개",
        "pdf-m4": "화태자동차(Huatai Automobile) 독점 총판권 및 중국 북경자동차(BAIC) 한국 독점 판매권 확보",
        "pdf-m5": "한국 내 북경전기차 KD 조립 생산 시설 구축 및 해외 판매 거점 확대",
        "pdf-m6": "사우디아라비아 및 알제리 에너지 프로젝트 투자 협약 체결",
        "pdf-m7": "경기도 평택 현덕지구 및 충북 음성 인곡산업단지 8만 평 규모 생산 공장 부지 조성 추진",
        "pdf-m8": "캄보디아 해외 생산 거점 구축, 카메룬 알루미늄 및 가봉 구리(Cathode) 무역 수행",
        "pdf-sub1-name": "LUXION GLOBAL MOTORS",
        "pdf-sub1-desc": "메르세데스-벤츠, 포드 등 완성차 브랜드 브랜딩 및 글로벌 해외 세일즈",
        "pdf-sub2-name": "HAWTAIKOREA MOTORS",
        "pdf-sub2-desc": "수입 자동차 독점 유통, 커머스 및 수입차 관련 무역 솔루션",
        "pdf-sub3-name": "ENU (이앤유)",
        "pdf-sub3-desc": "글로벌 라이브 커머스, 크로스보더 이커머스 및 온라인 통합 판매",
        "pdf-sub4-name": "SRGC After Service",
        "pdf-sub4-desc": "전국 딜러망 전용 공인 서비스 센터 및 튜닝/보증 A/S 정비 네트워크",
        "pdf-sub5-name": "GOMSD / PAYTTO",
        "pdf-sub5-desc": "수입차 유통, 수륙양용차 개발 및 종합 모빌리티 컨설팅",
        "pdf-partner-title": "정부기관 & 지자체 & 파트너 대기업",
        "pdf-partner-desc": "국토교통부, 경기경제자유구역청, 한진그룹, 위동항운 및 주요 금융기관과의 강력한 글로벌 연대",
        "pdf-dealer-title": "전국 8개 거점 총 48개 대리점 & A/S 네트워크",
        "pdf-dealer-desc": "서울(6), 인천/경기(10), 강원(2), 대전/충남(6), 광주/전남(6), 대구/경북(6), 부산/경남(10), 제주(2)",
        
        // Success Modal
        "modal-title": "성공적으로 접수되었습니다",
        "modal-desc": "귀중한 제휴 요청이 페이또 글로벌 영업 본부에 안전하게 접수되었습니다. 기재해주신 이메일로 24시간 이내에 담당자가 피드백을 전달해 드리겠습니다.",
        "modal-btn-close": "확인",
        
        // Common Labels
        "table-hdr-spec": "등급 / 스펙",
        "table-hdr-purity": "순도 (Purity)",
        "table-hdr-use": "주요 용도"
    },
    en: {
        "nav-group-about": "ABOUT US",
        "nav-company-intro": "Overview",
        "nav-group-materials": "RAW MATERIALS",
        "nav-gold": "Gold (Au)",
        "nav-aluminum": "Aluminum (Al)",
        "nav-copper": "Copper (Cu)",
        "nav-coal": "Coal",
        "nav-group-mobility": "MOBILITY",
        "nav-automotive": "China Car Distribution",
        "nav-group-energy": "NEW ENERGY & FUTURE TECH",
        "nav-energy-special": "Energy & Special Mobility",
        "nav-group-partnership": "PARTNERSHIP",
        "nav-contact": "Contact Us",
        "ticker-title": "Live Commodity Price",
        "trading-active": "Global Trading Active",
        "copyright": "© 2026 PAYTTO Co., Ltd. All rights reserved.",
        "header-consult-btn": "Live Consultation",
        
        // Intro Section
        "hero-badge": "EST. 2013",
        "hero-title": "Innovation of Global Resources<br>& Future Mobility Integration",
        "hero-desc": "PAYTTO is an innovative company creating vertical value from raw material procurement to future mobility manufacturing based on global resource trading capabilities and proprietary hardware design engineering.",
        "hero-btn-primary": "Explore Mobility",
        "hero-btn-secondary": "Raw Materials",
        "core-value-title": "PAYTTO Core Business Strengths",
        "core-value-desc": "A balanced business portfolio combining premium resources and high-tech hardware.",
        "value-card1-title": "Supply Chain Leadership",
        "value-card1-desc": "Stable and efficient supply of essential resources such as gold, aluminum, copper, and coal for high-tech manufacturing.",
        "value-card2-title": "Proprietary Future Mobility",
        "value-card2-desc": "Designing and manufacturing next-generation smart electric vehicles by integration of our lightweight aluminum and copper alloys.",
        "value-card3-title": "Global Partnership Network",
        "value-card3-desc": "Driving supply chain diversification through strategic alliances with global mining majors and auto brands.",
        "more-btn": "Learn More",
        "stat-label-trade": "Global Trade Volume (USD)",
        "stat-label-network": "Global Supply Network",
        "stat-label-vol": "Annual Volume Handled",
        "stat-label-purity": "Purity Verification Rate",
        
        // Gold Section
        "gold-media-caption": "PAYTTO-certified 999.9 Fine Gold Bullion",
        "gold-cat-tag": "Safe Haven Asset",
        "gold-product-title": "Physical Gold & High-Value Industrial Gold Trade",
        "gold-product-desc": "PAYTTO safely supplies premium gold bullion to hedge global macroeconomic risks. We also secure supply chains for high-purity gold sputtering targets and bonding wires.",
        "gold-bullet1": "Supply of 99.99% gold bars guaranteed under LBMA delivery standards.",
        "gold-bullet2": "Integrated with global smart security vaults, providing fully-insured safe deposit solutions.",
        "gold-bullet3": "Supplying micro gold bonding wires to enhance corrosion resistance in automotive electronics.",
        "gold-table-use1": "Hedging asset, financial reserves, physical investment",
        "gold-table-use2": "Semiconductor leadframe bonding, fine wiring",
        "gold-table-use3": "Display thin film deposition, research coating",
        
        // Aluminum Section
        "al-media-caption": "PAYTTO Global Terminal Aluminum Material Unloading Process",
        "al-cat-tag": "Eco & Lightweight",
        "al-product-title": "Futuristic Ultra-Lightweight Aluminum Alloys",
        "al-product-desc": "We process and distribute high-performance aluminum alloys essential for lightweight structures in the eco-friendly energy era. Our high-tensile plates and extrusions construct EV battery packs and vehicle chassis.",
        "al-bullet1": "Advanced 6000 & 7000 series aerospace-grade high-strength alloy lineup.",
        "al-bullet2": "High thermal conductivity extrusion profiles for EV battery pack protection guards.",
        "al-bullet3": "Implementing low-carbon Green Aluminum to realize sustainable ESG supply chains.",
        "al-table-hdr-series": "Alloy Series",
        "al-table-hdr-prop": "Mechanical Properties",
        "al-table-prop1": "Excellent formability & corrosion resistance",
        "al-table-use1": "Automobile outer panels, EV battery pack housings",
        "al-table-prop2": "Ultra-high tensile strength and durability",
        "al-table-use2": "Aircraft fuselage structural members, defense, bumper beams",
        "al-table-prop3": "75% reduction in carbon footprint",
        "al-table-use3": "IT device casings, ESG-focused vehicle frames",
        
        // Copper Section
        "copper-media-caption": "High-purity oxygen-free copper tubes and wire loops",
        "copper-cat-tag": "Electrification Core",
        "copper-product-title": "Nerve Center of EV Revolution & Power Grids",
        "copper-product-desc": "Copper is the essential pathway for renewable energy grid transmission and electric motor propulsion. PAYTTO coordinates the global supply of 99.999% oxygen-free copper (OFC) and ultra-thin foils.",
        "copper-bullet1": "Global bulk trading of 99.99% electrolytic copper cathodes (LME Grade A).",
        "copper-bullet2": "Procuring nanometer-scale precision copper foils for lithium-ion battery anode collectors.",
        "copper-bullet3": "Producing extruded copper rods for power grid transmission lines and industrial transformers.",
        "copper-table-hdr-material": "Material Name",
        "copper-table-hdr-cond": "Conductivity (IACS)",
        "copper-table-hdr-spec": "Special Specs & Applications",
        "copper-table-use1": "EV traction motor hairpin windings, precision audio cables",
        "copper-table-use2": "LME Registered Grade A cathodes, wire drawing raw materials",
        "copper-table-cond3": "High strength & high elongation",
        "copper-table-use3": "Anode collector foil for Li-ion batteries (4.5~8μm thickness)",
        
        // Coal Section
        "coal-media-caption": "High-calorific coal unloaded at PAYTTO bulk terminal",
        "coal-cat-tag": "Industrial Energy",
        "coal-product-title": "Industrial Energy, High-Calorific Clean Coal Trade",
        "coal-product-desc": "We supply coking coal and high-calorific thermal coal across the Asia-Pacific region, crucial for steel manufacturing and power generation. PAYTTO ensures strict eco-friendly low-impurity standards.",
        "coal-bullet1": "Direct import of premium Hard Coking Coal used for blast furnace coke raw material.",
        "coal-bullet2": "Providing clean coal with low sulphur and nitrogen content to facilitate carbon capture.",
        "coal-bullet3": "Seamless integration of dry bulk shipping and real-time maritime logistics tracking.",
        "coal-table-hdr-type": "Coal Category",
        "coal-table-hdr-cal": "Calorific Value",
        "coal-table-hdr-prop": "Composition / Characteristics",
        "coal-table-cal1": "Metallurgical Premium",
        "coal-table-prop1": "Low ash (< 9.5%), low sulphur, high caking properties",
        "coal-table-prop2": "Low ash, high calorific value, power generation utility",
        "coal-table-cal3": "Over 7,500 kcal/kg",
        "coal-table-prop3": "High-grade anthracite, steel recarburizer, chemical industry raw material",
        
        // Automotive Section
        "auto-badge": "CHINA AUTO DISTRIBUTION DIVISION",
        "auto-hero-title": "PAYTTO Chinese Car Global Distribution",
        "auto-hero-desc": "Based on close partnerships with leading smart EV brands in China, PAYTTO manages the import, customs clearance, certification, and domestic logistics network for high-performance eco-friendly vehicles.",
        "auto-grid-title": "Core Distribution Capabilities",
        "auto-grid-desc": "PAYTTO's unique import distribution process combining global supply chains and customs clearance expertise.",
        "auto-tech1-title": "One-stop Customs & Certification",
        "auto-tech1-desc": "We provide swift environmental/transport ministry certification procedures and comprehensive battery safety warranty inspection services tailored to domestic regulations.",
        "auto-tech2-title": "National Dealer & AS Network",
        "auto-tech2-desc": "We offer imported EV-dedicated vehicle care solutions through collaboration with offline showrooms and authorized service centers in major hub cities.",
        "auto-tech3-title": "Smart Vehicle Logistics System",
        "auto-tech3-desc": "From port unloading to final delivery, we guarantee safe damage-free transport using specialized carrier trucks and real-time GPS tracking.",
        "auto-perf-val1": "Import Brands",
        "auto-perf-lbl1": "Partner Manufacturers",
        "auto-perf-val2": "15,000+ Units",
        "auto-perf-lbl2": "Annual Distribution Capa",
        "auto-perf-val3": "Within 5 Days Avg.",
        "auto-perf-lbl3": "Customs & Inspection Period",
        
        // Contact Section
        "contact-info-title": "PAYTTO Business<br>Partnership & Inquiry",
        "contact-info-desc": "Our global strategy team will guide you through raw material supply agreements, EV contract manufacturing, and joint ventures.",
        "contact-ch1-title": "Corporate Headquarters",
        "contact-ch1-desc": "RM 702, Jangheung Bldg, 40 Magokjungang 6-ro, Gangseo-gu, Seoul, Korea (PAYTTO)",
        "contact-ch2-title": "Global Trading Desk",
        "contact-ch3-title": "Business Email Inbox",
        "form-label-name": "Full Name *",
        "form-ph-name": "Enter your full name",
        "form-label-company": "Company Name *",
        "form-ph-company": "e.g., Paytto Mobility",
        "form-label-email": "Business Email *",
        "form-label-type": "Target Division *",
        "form-opt-select": "Please select",
        "form-opt-mat": "Raw Materials Purchase (Gold, Al, Cu, Coal)",
        "form-opt-auto": "Mobility / Automotive Partnership",
        "form-opt-ir": "Investment & IR",
        "form-opt-other": "Other Business Partnership",
        "form-label-msg": "Inquiry Details *",
        "form-ph-msg": "Please detail your raw material specs or proposal. Our specialist will contact you shortly.",
        "form-btn-submit": "Send Proposal Request",
        
        // Profile PDF Extended Data
        "ceo-title": "Message from CEO",
        "ceo-name": "CEO Kiwoong Yang",
        "ceo-quote": "“Green Mobility, Vision for Future”",
        "ceo-desc": "Established in 2013, PAYTTO is a comprehensive international trading and industrial solutions provider leading eco-friendly mobility, renewable energy, raw materials, and resource recycling.",
        "subsidiary-title": "PAYTTO Group Subsidiaries",
        "subsidiary-desc": "Core subsidiary ecosystem covering imported car distribution, e-commerce, after-sales networks, and vehicle consulting.",
        "al-volume": "20,000 Tons/Mo (240k Tons/Yr)",
        "copper-volume": "5,000 Tons/Mo (60k Tons/Yr)",
        "coal-volume": "1.5 Million Tons/Yr",
        "oil-cat-tag": "Energy & Resources",
        "oil-product-title": "Global Energy Trading, Crude Oil",
        "oil-product-desc": "We supply and distribute over 100,000 tons of crude oil monthly based on our global resource logistics network.",
        "oil-volume": "100,000 Tons/Mo (1.2M Tons/Yr)",
        "auto-military-badge": "Exclusive Defense Contract",
        "auto-military-title": "Exclusive EV Supply for Ministry of Defense",
        "auto-military-desc": "Confirmed initial order of 3,000 EVs for the Military Welfare Group with a phased expansion roadmap (5k in 2026 → 15k in 2027 → 30k in 2028).",
        "auto-dealer-spec": "48 Authorized Dealers Across 8 Hub Regions",
        "energy-hero-badge": "NEXT ENERGY & SPECIAL MOBILITY",
        "energy-hero-title": "Resource Recycling & Special Mobility",
        "energy-hero-desc": "Creating sustainable industrial value through battery recycling (Black Mass), global 100MW solar plants, amphibious vehicles, rescue drones, and space capsules.",
        "tech-battery-title": "Battery Recycling & Black Mass",
        "tech-battery-desc": "Recycling used EV batteries to extract Black Mass and secure critical mineral supply chains including lithium and nickel.",
        "tech-solar-title": "100MW Solar Plants & Aquaculture",
        "tech-solar-desc": "Developing 100MW solar power plants in Kazakhstan, Uzbekistan, and Vietnam alongside solar-powered eco-aquaculture projects.",
        "tech-amphibious-title": "Amphibious EVs & Rescue Drones",
        "tech-amphibious-desc": "Manufacturing KINTEX-featured amphibious electric carts and rapid water rescue drones (JX-6A) for emergency golden-time saving.",
        "tech-capsule-title": "Smart Space Capsules & Trailers",
        "tech-capsule-desc": "Custom modular Space Capsules for tourism/camping/office and specialized trailers for luxury vehicles and drones.",
        
        // 100% PDF Section 01 Full Dataset (EN)
        "pdf-milestone-title": "PAYTTO Major History & Growth Milestones",
        "pdf-milestone-desc": "Chronological achievements of PAYTTO pioneering eco-friendly trade and global mobility since 2013.",
        "pdf-m1": "2013: PAYTTO established in Goyang-si, Gyeonggi-do, aiming to bridge Sino-Korean trade.",
        "pdf-m2": "First to sell Mongolian thermal coal to Chinese power plants.",
        "pdf-m3": "Expanded Wanghong influencer live-commerce and raw materials trading.",
        "pdf-m4": "Secured general distributorship for Huatai Automobile & exclusive Korea rights for BAIC electric vehicles.",
        "pdf-m5": "Established KD assembly production facilities for BAIC EVs in Korea & expanded global hubs.",
        "pdf-m6": "Secured energy investment commitments in Saudi Arabia and Algeria.",
        "pdf-m7": "Planned 80,000-pyeong production sites in Pyeongtaek (Gyeonggi) & Eumseong (Chungbuk).",
        "pdf-m8": "Established Cambodia production base; conducted Cameroon aluminum & Gabon copper cathode trade.",
        "pdf-sub1-name": "LUXION GLOBAL MOTORS",
        "pdf-sub1-desc": "Mercedes-Benz, Ford and global vehicle brand distribution & international sales network.",
        "pdf-sub2-name": "HAWTAIKOREA MOTORS",
        "pdf-sub2-desc": "Exclusive import vehicle distribution, e-commerce, and cross-border automotive trade solutions.",
        "pdf-sub3-name": "ENU (이앤유)",
        "pdf-sub3-desc": "Global live commerce, cross-border e-commerce, and integrated online sales platform.",
        "pdf-sub4-name": "SRGC After Service",
        "pdf-sub4-desc": "Nationwide dealer-exclusive certified service centers, warranty & tuning A/S network.",
        "pdf-sub5-name": "GOMSD / PAYTTO",
        "pdf-sub5-desc": "Import vehicle distribution, amphibious vehicle development, and comprehensive mobility consulting.",
        "pdf-partner-title": "Government Agencies, Municipalities & Enterprise Partners",
        "pdf-partner-desc": "Strong global alliance with MOLIT, GGFEZ, Goyang City, Hanjin Group, Weidong Ferry, and top banking partners.",
        "pdf-dealer-title": "48 Authorized Dealers & AS Networks Across 8 Regional Hubs",
        "pdf-dealer-desc": "Seoul (6), Incheon/Gyeonggi (10), Gangwon (2), Daejeon/Chungnam (6), Gwangju/Jeonnam (6), Daegu/Gyeongbuk (6), Busan/Gyeongnam (10), Jeju (2)",
        
        // Success Modal
        "modal-title": "Successfully Submitted",
        "modal-desc": "Your partnership request has been securely sent to PAYTTO's Global Sales Division. A representative will contact you via email within 24 hours.",
        "modal-btn-close": "Close",
        
        // Common Labels
        "table-hdr-spec": "Grade / Spec",
        "table-hdr-purity": "Purity",
        "table-hdr-use": "Primary Application"
    },
    ch: {
        "nav-group-about": "企业介绍",
        "nav-company-intro": "公司概况",
        "nav-group-materials": "原材料事业部",
        "nav-gold": "黄金 (Au)",
        "nav-aluminum": "铝材 (Al)",
        "nav-copper": "铜材 (Cu)",
        "nav-coal": "煤炭 (Coal)",
        "nav-group-mobility": "智能出行",
        "nav-automotive": "中国进口车分销",
        "nav-group-energy": "新业务与未来科技",
        "nav-energy-special": "新能源与特种出行",
        "nav-group-partnership": "合作洽谈",
        "nav-contact": "合作咨询",
        "ticker-title": "原材料实时行情",
        "trading-active": "全球贸易服务中",
        "copyright": "© 2026 PAYTTO Co., Ltd. 保留所有权利。",
        "header-consult-btn": "合伙人在线咨询",
        
        // Intro Section
        "hero-badge": "始于 2013",
        "hero-title": "全球资源的创新与<br>未来移动出行的融合",
        "hero-desc": "PAYTTO(贝托)依托全球资源贸易能力与专有硬件设计工程，创造了从原材料采购到未来出行制造的垂直一体化价值体系。",
        "hero-btn-primary": "了解出行事业",
        "hero-btn-secondary": "原材料事业部",
        "core-value-title": "PAYTTO的核心业务优势",
        "core-value-desc": "融合优质原材料与高科技硬件的多元化业务组合。",
        "value-card1-title": "供应链领军优势",
        "value-card1-desc": "稳定高效地供应黄金、铝、铜、煤炭等高科技制造与能源基建所需的核心资源。",
        "value-card2-title": "自主研发未来出行",
        "value-card2-desc": "将贝托超轻量化铝材与导电铜件完美融合，自主设计并制造新一代智能绿色汽车。",
        "value-card3-title": "全球合作网络",
        "value-card3-desc": "与全球各大矿业巨头及汽车制造品牌战略联盟，推动供应链多元化。",
        "more-btn": "了解更多",
        "stat-label-trade": "全球贸易额 (USD)",
        "stat-label-network": "全球供应网络",
        "stat-label-vol": "年原材料处理量",
        "stat-label-purity": "材料纯度验证率",
        
        // Gold Section
        "gold-media-caption": "贝托保修 999.9 精炼黄金",
        "gold-cat-tag": "避险资产",
        "gold-product-title": "实物黄金与高价值工业黄金贸易",
        "gold-product-desc": "贝托安全供应优质金条以规避宏观经济风险。同时，我们保障高纯度金溅射靶材和微细键合线的供应链稳定。",
        "gold-bullet1": "根据 LBMA 交割标准，保证供应 99.99% 的纯金条。",
        "gold-bullet2": "与全球智能保险箱联动，提供全保安全存储服务。",
        "gold-bullet3": "供应微细金键合线，用于提升车载电子器件的耐腐蚀性能。",
        "gold-table-use1": "避险资产、银行准备金、实物投资",
        "gold-table-use2": "半导体引线框架键合，细微布线",
        "gold-table-use3": "显示器薄膜沉积，研究用涂层",
        
        // Aluminum Section
        "al-media-caption": "贝托全球码头的铝材装卸过程",
        "al-cat-tag": "环保与轻量化",
        "al-product-title": "未来工业的支柱：超轻高科技铝合金",
        "al-product-desc": "我们加工并分销高性能铝合金，这是绿色能源时代结构轻量化的关键。我们的高拉伸强度铝板和挤压件构筑了电动汽车电池包和车辆底盘。",
        "al-bullet1": "建立 6000 系列和 7000 系列航空级高强度合金产品线。",
        "al-bullet2": "为 EV 电池包安全保护罩提供高热导率挤压型材。",
        "al-bullet3": "推行低碳“绿色铝”，构建可持续发展的 ESG 供应链。",
        "al-table-hdr-series": "合金系列",
        "al-table-hdr-prop": "机械性能",
        "al-table-prop1": "优良的成型性与耐蚀性",
        "al-table-use1": "汽车外板、电动汽车电池箱",
        "al-table-prop2": "超高抗拉强度和耐用性",
        "al-table-use2": "飞机机身结构件、国防工业、保险杠横梁",
        "al-table-prop3": "减少 75% 的碳足迹",
        "al-table-use3": "IT 设备外壳、专注于 ESG 的车身框架",
        
        // Copper Section
        "copper-media-caption": "高纯度无氧铜管及线圈",
        "copper-cat-tag": "电气化核心",
        "copper-product-title": "电动汽车革命与电网输电的神经网络",
        "copper-product-desc": "铜是可再生能源电网和电动机驱动不可或缺的脉络。贝托在全球范围内协调 99.999% 无氧铜（OFC）和超薄铜箔的稳定供应。",
        "copper-bullet1": "LME 注册 A 级电解铜阴极的全球大宗贸易。",
        "copper-bullet2": "采购用于锂离子电池负极集电体的纳米级精密铜箔。",
        "copper-bullet3": "为电网输电线和工业变压器生产电工铜杆。",
        "copper-table-hdr-material": "材料名称",
        "copper-table-hdr-cond": "导电率 (IACS)",
        "copper-table-hdr-spec": "特殊规格与应用",
        "copper-table-use1": "EV 驱动电机发卡绕组、高保真音频线",
        "copper-table-use2": "LME A级电解铜阴极、拉丝原材料",
        "copper-table-cond3": "高强度/高延伸率",
        "copper-table-use3": "锂电池负极集电箔 (4.5~8μm厚度)",
        
        // Coal Section
        "coal-media-caption": "贝托大宗码头卸下的高发热量煤炭",
        "coal-cat-tag": "工业能源",
        "coal-product-title": "工业动力能源：高效清洁煤炭贸易",
        "coal-product-desc": "我们在亚太地区供应炼焦煤和高发热量动力煤，这对钢铁制造和发电至关重要。贝托确保执行严格的环保低杂质标准。",
        "coal-bullet1": "直接进口用于炼焦原料的高品质硬焦煤。",
        "coal-bullet2": "供应低硫、低氮的清洁无烟煤，以促进碳捕集与封存。",
        "coal-bullet3": "提供干散货海运和实时海上物流运输的可视化跟踪服务。",
        "coal-table-hdr-type": "煤炭种类",
        "coal-table-hdr-cal": "发热量",
        "coal-table-hdr-prop": "成分特征 / 特点",
        "coal-table-cal1": "冶金优质煤",
        "coal-table-prop1": "低灰分 (< 9.5%), 低硫, 高结焦性",
        "coal-table-prop2": "低灰分、高发热量、发电专用动力煤",
        "coal-table-cal3": "7,500 kcal/kg 以上",
        "coal-table-prop3": "高等级无烟煤、炼钢增碳剂、特殊化工原料",
        
        // Automotive Section
        "auto-badge": "贝托汽车事业部",
        "auto-hero-desc": "融合了贝托超轻铝合金车身和高效率绕组电机的下一代豪华 GT 跑车概念车。",
        "auto-grid-title": "核心出行方案",
        "auto-grid-desc": "融合优质原材料与先进硬件工程的贝托汽车独特优势。",
        "auto-tech1-title": "800V 超高压电池包",
        "auto-tech1-desc": "采用贝托精加工铝壳和高导电铜箔，具有优异的热稳定性，18分钟内即可将电量从10%充至80%。",
        "auto-tech2-title": "智能自动驾驶",
        "auto-tech2-desc": "将 12 个激光雷达/雷达传感器与车载 AI 处理器集成，安全实现 L3+ 级高速巡航自动驾驶。",
        "auto-tech3-title": "铝合金承载式车身",
        "auto-tech3-desc": "采用 7000 系列高硬度铝合金的一体化压铸件，相比传统钢车身减重 30%，大幅提高能效。",
        "auto-perf-val1": "2.8秒",
        "auto-perf-lbl1": "0-100 km/h 加速时间",
        "auto-perf-lbl2": "单次充电续航里程 (WLTP)",
        "auto-perf-val3": "720 马力",
        "auto-perf-lbl3": "最大输出功率 (双电机合算)",
        
        // Contact Section
        "contact-info-title": "PAYTTO 商务<br>合作及咨询",
        "contact-info-desc": "我们的全球战略团队将为您解答原材料大宗采购、电动车代工制造及合资企业合作等问题。",
        "contact-ch1-title": "集团总部",
        "contact-ch1-desc": "韩国首尔特别市江西区麻谷中央6路 40 (麻谷洞, 长兴大厦) 702号 贝托",
        "contact-ch2-title": "全球贸易服务台",
        "contact-ch3-title": "商务咨询邮箱",
        "form-label-name": "姓名 *",
        "form-ph-name": "请输入您的姓名",
        "form-label-company": "公司名称 *",
        "form-ph-company": "例如：贝托出行",
        "form-label-email": "电子邮箱 *",
        "form-label-type": "咨询部门 *",
        "form-opt-select": "请选择",
        "form-opt-mat": "原材料采购 (黄金, 铝, 铜, 煤炭)",
        "form-opt-auto": "智能出行 / 汽车业务合作",
        "form-opt-ir": "投资及IR咨询",
        "form-opt-other": "其他商务合作",
        "form-label-msg": "咨询详细内容 *",
        "form-ph-msg": "请填写具体的原材料需求规格或合作建议内容，负责人将尽快与您联系。",
        "form-btn-submit": "发送合作申请",
        
        // Profile PDF Extended Data
        "ceo-title": " CEO 寄语",
        "ceo-name": " CEO 杨基雄 (Kiwoong Yang)",
        "ceo-quote": "“绿色出行，展望未来”",
        "ceo-desc": "贝托成立于 2013 年，是中韩绿色贸易的桥梁，也是引领高性能出行、可再生能源、原材料贸易及资源循环系统的全球工业解决方案企业。",
        "subsidiary-title": "贝托集团主要子公司",
        "subsidiary-desc": "涵盖进口车分销、跨境电商、售后服务网络及汽车咨询的贝托核心子公司生态系统。",
        "al-volume": "月均2万吨 (年均24万吨)",
        "copper-volume": "月均5,000吨 (年均6万吨)",
        "coal-volume": "年均150万吨供应",
        "oil-cat-tag": "能源与资源",
        "oil-product-title": "全球能源贸易：原油 (Crude Oil)",
        "oil-product-desc": "基于全球资源物流网络，每月稳定供应和分销超過 10 万吨原油及石油类原料。",
        "oil-volume": "月均10万吨 (年均120万吨)",
        "auto-military-badge": "国防部独家供应协议",
        "auto-military-title": "韩国国防部福利团电动汽车独家供应",
        "auto-military-desc": "已确认国防部福利团首批 3,000 台电动车独家订单，并推进 2026 年 5 千台 → 2027 年 1.5 万台 → 2028 年 3 万台的阶段性路线图。",
        "auto-dealer-spec": "全国 8 大枢纽共 48 家经销商与售后网络",
        "energy-hero-badge": "NEXT ENERGY & SPECIAL MOBILITY",
        "energy-hero-title": "资源循环与未来特种出行",
        "energy-hero-desc": "通过废旧电池回收(Black Mass)、全球 100MW 光伏电站、水陆两栖电动车、水上救援无人机及太空舱模块化房屋，创造未来可持续工业价值。",
        "tech-battery-title": "废旧电池回收与资源循环",
        "tech-battery-desc": "回收电动汽车废旧电池，提取黑粉(Black Mass)，保障锂、镍等关键矿产供应链。",
        "tech-solar-title": "100MW 全球光伏与水上养殖",
        "tech-solar-desc": "在哈萨克斯坦、乌兹别克斯坦、越南等地建设 100MW 光伏电站及光伏结合水产养殖项目。",
        "tech-amphibious-title": "水陆两栖电动车与救援无人机",
        "tech-amphibious-desc": "制造 KINTEX 展出的水陆两栖电动卡特车及黄金救援时间水上特种无人机 (JX-6A)。",
        "tech-capsule-title": "智能太空舱与特种拖车",
        "tech-capsule-desc": "定制用于旅游/露营/办公的模块化智能太空舱(Space Capsule)，及超跑/特种设备专属拖车解决方案。",
        
        // 100% PDF Section 01 Full Dataset (CH)
        "pdf-milestone-title": "贝托主要发展历程与里程碑",
        "pdf-milestone-desc": "自 2013 年成立以来，贝托在开创中韩绿色贸易与全球出行市场方面的脚印。",
        "pdf-m1": "2013 年：贝托(PAYTTO)成立于韩国京畿道高阳市，旨在建立中韩友好贸易桥梁。",
        "pdf-m2": "首次实现将蒙古煤炭出口销售至中国火力发电厂的物流成果。",
        "pdf-m3": "积极开展网红(Wanghong)直播带货营销及原材料贸易。",
        "pdf-m4": "获得华泰汽车(Huatai Automobile)独家总代理权及北京汽车(BAIC)电动车韩国独家销售权。",
        "pdf-m5": "在韩国建立北京电动车 KD 组装生产设施，并扩大海外销售枢纽功能。",
        "pdf-m6": "获得沙特阿拉伯及阿尔及利亚能源项目投资承诺。",
        "pdf-m7": "推进在京畿道平泽玄德地区及忠北阴城仁谷产业园区规划 8 万坪生产基地。",
        "pdf-m8": "建立柬埔寨海外生产基地，开展喀麦隆铝材及加蓬阴极铜贸易。",
        "pdf-sub1-name": "LUXION GLOBAL MOTORS",
        "pdf-sub1-desc": "梅赛德斯-奔驰、福特等整车品牌分销及全球海外销售网络。",
        "pdf-sub2-name": "HAWTAIKOREA MOTORS",
        "pdf-sub2-desc": "进口汽车独家分销、跨境电商及进口车贸易解决方案。",
        "pdf-sub3-name": "ENU（이앤유）",
        "pdf-sub3-desc": "全球直播电商、跨境电子商务及在线综合销售平台。",
        "pdf-sub4-name": "SRGC After Service",
        "pdf-sub4-desc": "经销商专属认证服务中心及改装/质保售后维修网络。",
        "pdf-sub5-name": "GOMSD / PAYTTO",
        "pdf-sub5-desc": "进口车分销、水陆两栖车辆开发及综合出行咨询业务。",
        "pdf-partner-title": "政府机构、地方政府及大型企业合作伙伴",
        "pdf-partner-desc": "与韩国国土交通部、京畿自由经济区域厅(GGFEZ)、韩进集团、威东航运及各大银行紧密合作",
        "pdf-dealer-title": "全国 8 大枢纽共 48 家授权经销商及售后服务网络",
        "pdf-dealer-desc": "首尔(6)、仁川/京畿(10)、江原(2)、大田/忠南(6)、光州/全南(6)、大邱/庆北(6)、釜山/庆南(10)、济州(2)",
        
        // Success Modal
        "modal-title": "提交成功",
        "modal-desc": "您的合作咨询已被安全发送至 PAYTTO 环球销售事业部。代表将在 24 小时内通过电子邮件与您联系。",
        "modal-btn-close": "确认",
        
        // Common Labels
        "table-hdr-spec": "等级规格",
        "table-hdr-purity": "纯度",
        "table-hdr-use": "主要应用"
    }
};

let currentLanguage = 'ko';

// Navigation Control
function showSection(sectionId) {
    // Hide all sections with animation reset
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    
    // Display target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
        // Force reflow to restart transition
        targetSection.offsetHeight;
        targetSection.classList.add('active');
    }
    
    // Manage Sidebar active state
    document.querySelectorAll('nav li').forEach(li => {
        li.classList.remove('active');
    });
    
    const activeNav = document.getElementById(`nav-${sectionId}`);
    if (activeNav) {
        activeNav.classList.add('active');
    }
    
    // Set Header Breadcrumb and Section Title (with multilingual translation)
    let displayTitle = '';
    const isKo = currentLanguage === 'ko';
    const isCh = currentLanguage === 'ch';
    
    switch (sectionId) {
        case 'company-intro':
            displayTitle = isKo ? '회사 개요' : (isCh ? '公司概况' : 'Overview');
            // Trigger Counter Animation again when entering intro
            initCounters();
            break;
        case 'materials-gold':
            displayTitle = isKo ? '원자재 > 금 (Gold)' : (isCh ? '原材料 > 黄金' : 'Raw Materials > Gold');
            break;
        case 'materials-aluminum':
            displayTitle = isKo ? '원자재 > 알루미늄 (Aluminum)' : (isCh ? '原材料 > 铝材' : 'Raw Materials > Aluminum');
            break;
        case 'materials-copper':
            displayTitle = isKo ? '원자재 > 구리 (Copper)' : (isCh ? '原材料 > 铜材' : 'Raw Materials > Copper');
            break;
        case 'materials-coal':
            displayTitle = isKo ? '원자재 > 석탄 (Coal)' : (isCh ? '原材料 > 煤炭' : 'Raw Materials > Coal');
            break;
        case 'automotive':
            displayTitle = isKo ? '중국 수입차 유통' : (isCh ? '中国进口车分销' : 'China Car Distribution');
            break;
        case 'materials-oil':
            displayTitle = isKo ? '원자재 > 원유 (Crude Oil)' : (isCh ? '原材料 > 原油' : 'Raw Materials > Crude Oil');
            break;
        case 'energy-special':
            displayTitle = isKo ? '에너지 & 특수 모빌리티' : (isCh ? '新能源与特种出行' : 'Energy & Special Mobility');
            break;
        case 'contact':
            displayTitle = isKo ? '파트너십 > 협력 문의' : (isCh ? '合作伙伴 > 咨询' : 'Partnership > Inquiries');
            break;
    }
    document.getElementById('current-page-title').innerText = displayTitle;
    
    // Scroll content container back to top
    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
        scrollContainer.scrollTop = 0;
    }
}

// Language Toggle Logic
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Manage language select button active states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang] && i18n[lang][key]) {
            el.innerHTML = i18n[lang][key];
        }
    });
    
    // Update dynamic placeholder elements
    document.querySelectorAll('[data-placeholder]').forEach(el => {
        const phKey = el.getAttribute('data-placeholder');
        if (i18n[lang] && i18n[lang][phKey]) {
            el.placeholder = i18n[lang][phKey];
        }
    });
    
    // Redraw current section's header title
    const activeSection = document.querySelector('.content-section.active');
    if (activeSection) {
        showSection(activeSection.id);
    }
}

// Live Commodity Ticker Simulator
const tickerData = {
    gold: { price: 2410.50, change: 1.24 },
    al: { price: 2530.00, change: -0.45 },
    copper: { price: 9280.00, change: 0.85 },
    coal: { price: 142.20, change: -1.15 }
};

function updateTickerWidgets() {
    setInterval(() => {
        // Randomly update values
        for (let commodity in tickerData) {
            const current = tickerData[commodity];
            const changePercent = (Math.random() * 0.4 - 0.2); // -0.2% ~ +0.2%
            current.price += current.price * (changePercent / 100);
            current.change += changePercent;
            
            // Format output strings
            const priceStr = commodity === 'coal' || commodity === 'gold' 
                ? `$${current.price.toFixed(2)}` 
                : `$${Math.round(current.price).toLocaleString()}`;
                
            const changeSign = current.change >= 0 ? '+' : '';
            const changeStr = `${changeSign}${current.change.toFixed(2)}%`;
            
            // Update widget UI (generalized for all commodities)
            const el = document.getElementById(`ticker-${commodity}`);
            if (el) {
                const valueEl = el.querySelector('.value');
                if (valueEl) valueEl.innerText = priceStr;
                const changeEl = el.querySelector('.change');
                if (changeEl) {
                    changeEl.innerText = changeStr;
                    changeEl.className = `change ${current.change >= 0 ? 'positive' : 'negative'}`;
                }
            }
        }
    }, 4000);
}

// Number Counter Animation
function initCounters() {
    const counters = document.querySelectorAll('.stat-val');
    counters.forEach(counter => {
        const targetStr = counter.getAttribute('data-target');
        const hasTextPlus = targetStr.includes('+');
        const hasTextTon = targetStr.includes('톤+');
        const hasTextGae = targetStr.includes('개국');
        const hasTextPercent = targetStr.includes('%');
        
        let target = parseFloat(targetStr);
        if (isNaN(target)) target = 0;
        
        let start = 0;
        const duration = 1200; // ms
        const stepTime = 30;
        const steps = duration / stepTime;
        const increment = target / steps;
        
        let currentStep = 0;
        
        const timer = setInterval(() => {
            currentStep++;
            start += increment;
            
            if (currentStep >= steps) {
                counter.innerText = targetStr; // Ensure exact final value is printed
                clearInterval(timer);
            } else {
                let displayVal = '';
                const isEn = currentLanguage === 'en';
                const isCh = currentLanguage === 'ch';
                
                if (hasTextPlus && !hasTextTon) {
                    displayVal = `${start.toFixed(1)}B+`;
                } else if (hasTextTon) {
                    displayVal = isEn ? `${Math.round(start).toLocaleString()} Tons+` : (isCh ? `${Math.round(start).toLocaleString()}吨+` : `${Math.round(start).toLocaleString()}톤+`);
                } else if (hasTextGae) {
                    displayVal = isEn ? `${Math.round(start)} Countries` : (isCh ? `${Math.round(start)}个国家` : `${Math.round(start)}개국`);
                } else if (hasTextPercent) {
                    displayVal = `${start.toFixed(1)}%`;
                } else {
                    displayVal = start.toFixed(1);
                }
                counter.innerText = displayVal;
            }
        }, stepTime);
    });
}

// Interactive Contact Form Handler
function handleContactSubmit(event) {
    event.preventDefault();
    
    // Simulate API request delay
    const submitBtn = document.querySelector('.submit-btn');
    const originalContent = submitBtn.innerHTML;
    submitBtn.disabled = true;
    
    const isEn = currentLanguage === 'en';
    const isCh = currentLanguage === 'ch';
    submitBtn.innerHTML = isEn ? '<i class="fa-solid fa-circle-notch fa-spin"></i> Submitting...' : (isCh ? '<i class="fa-solid fa-circle-notch fa-spin"></i> 发送中...' : '<i class="fa-solid fa-circle-notch fa-spin"></i> 전송 중...');
    
    setTimeout(() => {
        // Show success modal
        document.getElementById('success-modal').style.display = 'flex';
        
        // Reset button and form
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalContent;
        document.getElementById('paytto-contact-form').reset();
    }, 1500);
}

function closeSuccessModal() {
    document.getElementById('success-modal').style.display = 'none';
    showSection('company-intro');
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Start Live Price Ticker
    updateTickerWidgets();
    
    // Trigger statistics counters
    initCounters();
});
