# Landing Page Copy — ThS. Vũ Anh Quân

Handoff for Claude Code. All copy is bilingual. Drop VI into `data-vi` and EN into
`data-en` attributes on the matching elements. Keep the existing design system,
fonts, and color tokens. Keep the slogan "Act Different, Feel Different" unchanged.

Sections in this file:
1. Hero
2. Credibility strip (replaces the old stats block; tiles are now SPLIT)
3. Testimonials (BUILD BUT KEEP COMMENTED OUT — see instructions)
4. Story
5. Methodology & Clinical Approach
6. Core Services
7. Educational Workshops & Programs
8. Five Content & Training Pillars
9. Contact

---

## 1. HERO

Replace the current eyebrow, H1, role, and tag. CTAs stay as-is. The long credential
line moves to a small line UNDER the CTA row.

**Eyebrow (audience)**
- VI: `Dành cho những người trẻ tuổi đang trải qua một giai đoạn không dễ dàng`
- EN: `For young people going through a hard chapter`

**Headline (H1)** — primary choice
- VI: `Thay đổi hành động, thay đổi cảm xúc.`
- EN: `Act Different, Feel Different.`

**Sub-line (tag)**
- VI: `Không gian an toàn đồng hành cùng người trẻ đối diện với áp lực, tổn thương và những bước ngoặt trưởng thành qua tham vấn tâm lý 1–1 chuyên nghiệp.`
- EN: `A safe space guiding young adults through pressure, healing, and life transitions with professional 1-on-1 clinical counseling.`

**Credential line (small, under the CTA row)**
- VI: `ThS. Vũ Anh Quân · Thạc sĩ Công tác Xã hội Lâm sàng (CUNY Silberman) · Nhà thực hành Công tác Xã hội được cấp phép bởi tiểu bang New York, Hoa Kỳ · Hoạt động tại Hà Nội, Việt Nam`
- EN: `Quan Anh Vu, MSW · Master of Social Work, Clinical Practice (CUNY Silberman) · LMSW, New York, USA · Currently practicing in Hanoi, Vietnam`

---

## 2. CREDIBILITY STRIP (replaces `<section class="stats">`)

Remove all four old stat tiles, including the `80%+ recovered` claim and the
`data-count` animation if it no longer fits. Build FIVE tiles. The client and
trainee numbers are now SPLIT into two separate tiles so each claim is
independently true.

**Tile 1 — Years**
- VI: `Gần 10 năm thực hành tham vấn tâm lý từ Hoa Kỳ tới Việt Nam`
- EN: `Nearly a decade of counseling practice from USA to Vietnam`

**Tile 2 — License**
- VI: `Nhà thực hành công tác xã hội được cấp phép · LMSW, tiểu bang New York, Hoa Kỳ`
- EN: `Licensed Master-level Social Worker · LMSW, New York`

**Tile 3 — Clients (solo caseload only)**
- VI: `Hàng trăm thân chủ đã đồng hành (từ 2017)`
- EN: `Hundreds of clients supported (since 2017)`

**Tile 4 — Trainees (DEP Project — FILL IN NUMBER)**
- VI: `Trên 200 học viên được đào tạo kỹ năng tham vấn tâm lý qua Dự án ĐẸP (NIMH R01)`
- EN: `Over 200 practitioners trained through the DEP Project (NIMH R01`

**Tile 5 — Orgs**
- VI: `Diễn thuyết cùng Intellect Vietnam, thỉnh giảng tại VinUni, Trường Y tế Công cộng, thành viên Hội Tâm lý trị liệu Việt Nam (VnPA)`
- EN: `Speaking with Intellect Vietnam, visiting lecturer at VinUni, Hanoi University of Public Health, member of Vietnam Psychotherapy Association (VnPA)`

> If five tiles is too many for the layout, merge Tiles 4 and 5 together.

---

## 3. TESTIMONIALS — BUILD, BUT KEEP COMMENTED OUT

> IMPORTANT: Build the full testimonials section markup, then wrap the ENTIRE
> section in an HTML comment `<!-- ... -->` so it does NOT render on the live page.
> These are real client quotes and client consent to publish is still pending.
> Do not display any of them until consent is confirmed. When a given client
> approves, uncomment that single card and delete the rest.
>
> While the section is hidden, the live page relies on the credibility strip
> (Section 2) for social proof, plus the single interim line below.

**Interim line (this one CAN go live now — place where the testimonials will sit, or omit entirely):**
- VI: `Gần một thập kỷ đồng hành cùng hàng trăm người trẻ trên hành trình hiểu mình và tìm lại sự cân bằng.`
- EN: `Over nearly a decade of walking alongside hundreds of young people on the path to understanding themselves and finding their balance again.`

**Section heading (for the commented-out block)**
- VI: `Những người đã đồng hành cùng Quân`
- EN: `In their words`

**Sub-heading**
- VI: `Một vài chia sẻ từ thân chủ cũ (đã được sự đồng ý và ẩn danh).`
- EN: `A few words from former clients (shared with permission, anonymized).`

### Card 1 — N.A
- Quote VI: `“Cảm ơn Quân rất nhiều. Em đã tiếp sức cho chị qua từng chặng của cuộc sống.”`
- Quote EN: `“Thank you so much, Quan. You gave me strength through every stage of my life.”`
- Descriptor VI: `Chị N.A · 38 tuổi — vượt qua giai đoạn hôn nhân tổn thương, tìm lại sự tự tin và vững vàng trong cuộc sống và sự nghiệp.`
- Descriptor EN: `N.A · 38 — moved through a painful marriage to rebuild her confidence and thrive in her personal life and career.`

### Card 2 — V.H
- Quote VI: `“Mọi thứ đều ổn anh ạ. Em sắp về đến đích rồi, và em đã quyết định về Việt Nam làm việc. Gia đình em rất vui với quyết định này.”`
- Quote EN: `“Everything's going well. I'm almost at the finish line, and I've decided to come back to Vietnam to work. My family is so happy with the decision.”`
- Descriptor VI: `Em V.H · 25 tuổi — trở lại đại học sau giai đoạn gián đoạn vì trầm cảm, tốt nghiệp và tự tin bước tiếp.`
- Descriptor EN: `V.H · 25 — returned to university after a depression-related break, graduated, and moved forward with confidence.`

### Card 3 — T.A
- Quote VI: `“Thật sự em rất biết ơn. Từ những buổi đầu đến giờ, em trân trọng những thay đổi tích cực ở nhiều khía cạnh trong cuộc sống mà em có được khi đồng hành cùng anh.”`
- Quote EN: `“I'm truly grateful. From our very first sessions until now, I treasure the positive changes in so many parts of my life that came from working with you.”`
- Descriptor VI: `Em T.A · 19 tuổi — kiên trì suốt hành trình dài và đỗ vào ngôi trường em mơ ước.`
- Descriptor EN: `T.A · 19 — persevered through a long journey and got into her dream university.`

### Card 4 — M.A (FEATURE — display larger / full-width)
- Quote VI: `“Anh đã giúp chị rất nhiều — từ lúc chị chỉ muốn né tránh mọi thứ và ôm hết trách nhiệm vào mình, đến khi chị quay lại được với công việc, kết nối lại với mọi người, và học cách đặt ranh giới để được nghỉ ngơi và hồi phục.”`
- Quote EN: `“You helped me so much — from when I just wanted to avoid everything and carry every responsibility alone, to being able to return to my work, reconnect with people, and set the boundaries I needed to finally rest and recover.”`
- Descriptor VI: `Chị M.A · 44 tuổi — học cách đặt ranh giới và hồi phục sau giai đoạn gánh vác quá sức.`
- Descriptor EN: `M.A · 44 — learned to set boundaries and recover after a period of carrying too much.`

---

## 4. STORY (replaces current story paragraphs; leads with the emotional core)

**Paragraph 1**
- VI: `Câu chuyện của Quân bắt đầu năm 15 tuổi, với chẩn đoán ung thư bạch cầu. Biến cố ấy buộc tôi phải sang Mỹ điều trị. Giữa những ngày tháng vừa kiệt sức vì bệnh tật, vừa lạc lõng ở một đất nước xa lạ, Quân nhận được sự hỗ trợ từ một nhân viên công tác xã hội lâm sàng tại bệnh viện. Người này đã trực tiếp thực hiện các buổi tham vấn tâm lý chuyên sâu cho Quân, cũng như hỗ trợ gia đình anh lo liệu các thủ tục thực tế như giáo dục, đi lại, ăn ở và tài chính.
Họ ngồi lại cùng Quân, giúp tôi đối diện và đi qua những cuộc khủng hoảng dồn dập đổ xuống lúc bấy giờ: nỗi sợ cái chết cận kề ở tuổi 15, áp lực thích nghi khi thay đổi môi trường sống quá đột ngột, cảm giác cô độc của một đứa trẻ mới lớn phải rời xa trường lớp, bạn bè, và cả sự tự ti khi chứng kiến cơ thể mình biến đổi, rụng tóc sau những đợt hóa trị dài ngày.
Những buổi trò chuyện trị liệu đó đã thay đổi hoàn toàn hướng đi cuộc đời tôi. Lần đầu tiên Quân nhận ra rằng, đằng sau mỗi chẩn đoán là cả một thế giới nội tâm đầy xáo trộn cần được thấu hiểu. Cảm giác được lắng nghe và giữ chân mình lại trong những thời khắc đen tối nhất đã thôi thúc Quân trở thành một nhà tham vấn tâm lý chuyên nghiệp. Cũng chính vì vậy mà tôi lựa chọn đi theo nhánh Lâm sàng của ngành Công tác Xã hội để có thể đồng hành với người khác bằng cả chuyên môn lẫn sự thấu cảm của một người từng trải.`
- EN: `Quan’s story began with a battle with leukemia at age 15. This major life turning point required him to travel to the United States for medical treatment. Amid the physical exhaustion of illness and the absolute disorientation of being in a foreign land, he received support from a hospital social worker. This worker provided psychological counseling for Quan, as well as helping his family manage the logistics of education, transportation, housing and finances.
They sat down with him, helping him face and navigate the compounding crises that overwhelmed him at the time: the fear of death at just 15, the pressure of adapting to a sudden change of environment, the isolation of a teenager forced away from school and friends, and the deep insecurity of watching his body change, losing all his hair after long rounds of chemotherapy.
Those therapeutic conversations completely changed the trajectory of Quan’s life. For the first time, he realized that behind every medical diagnosis lies a turbulent inner world in need of understanding. Feeling heard and grounded during his darkest hours inspired Quan to become a professional counselor. He chose the Clinical branch of Social Work so that he could walk alongside others with both rigorous professional expertise and the authentic empathy of someone who has lived through it.`

**Paragraph 2**
- VI: `Quân tốt nghiệp Cử nhân Tâm lý học tại Đại học Brandeis, sau đó hoàn thành bằng Thạc sĩ Công tác Xã hội theo định hướng Thực hành Lâm sàng tại Trường CUNY Silberman và nhận chứng chỉ hành nghề chuyên nghiệp (LMSW) của bang New York. Sau khi tốt nghiệp, tôi đã có nhiều năm làm việc trực tiếp tại các khu vực còn nhiều khó khăn ở Harlem và Jamaica tại thành phố New York, tập trung vào tham vấn tâm lý cho những cá nhân phải sống chung với những rối loạn tâm thần phức tạp như rối loạn lưỡng cực, tâm thần phân liệt, sang chấn tâm lý phức tạp, lo âu và trầm cảm dạng nặng.
Sau khi quyết định trở về Việt Nam vào năm 2019, hiện tại tôi dành phần lớn thời gian để lắng nghe và đồng hành cùng các bạn trẻ qua các buổi tham vấn cá nhân 1-1, đồng thời tham gia tổ chức các buổi hội thảo, talkshow và chương trình đào tạo với mong muốn đưa những kiến thức thực tế về sức khỏe tinh thần đến gần hơn với cộng đồng.`
- EN: `Quan earned his BA in Psychology from Brandeis University, followed by a Master of Social Work with a clinical focus from the CUNY Silberman School of Social Work, and became a Licensed Master Social Worker (LMSW) in New York State. He spent years working directly in high-needs communities across Harlem and Jamaica, specializing in psychological counseling for individuals living with severe mental illnesses like bipolar disorder, schizophrenia, complex trauma, severe anxiety and depression.
In 2019, Quan returned home to Vietnam. Today, he devotes most of his time to listening to and walking alongside young adults through private 1-on-1 counseling, while also organizing workshops, talks, and training programs to bring practical mental health knowledge closer to the community.`

---

## 5. Cách tôi sẽ đồng hành cùng bạn (EN: My Approach)

- Visual Diagram Rings (Systemic Framework):
  - Văn hóa · Xã hội (EN: Culture · Society)

  - Cộng đồng (EN: Community)

  - Nhà trường · Công việc (EN: School · Work)

  - Gia đình (EN: Family)

  - Cá nhân (EN: Individual)

- Eyebrow: Cách tôi sẽ đồng hành cùng bạn (EN: My Approach)

- Section Title (H2): Công tác Xã hội Lâm sàng — một góc nhìn toàn cảnh về sức khỏe tâm thần (EN: Clinical Social Work — a holistic lens on mental health)

- Approach Paragraph: Tôi không nhìn khó khăn của bạn như một lỗi cần sửa, mà là những phản ứng rất con người trước những áp lực cuộc sống. Khi đồng hành cùng tôi, bạn sẽ trải qua một lộ trình trị liệu được thiết kế riêng, kết hợp giữa sự thấu cảm sâu sắc của Công tác Xã hội Lâm sàng và tính khoa học, thực tiễn của những liệu pháp dựa trên bằng chứng.
Khác với tâm lý học lâm sàng truyền thống thường chỉ tập trung vào nội tâm cá nhân, Công tác Xã hội Lâm sàng đặt bạn vào tâm điểm của một hệ sinh thái sống.

Page will display only title of each pillar, displayed in smooth rectangular blocks in 2x2, and expand out into the body content as the title block is clicked
- 4 Trụ cột của triết lý Thay đổi Hành động, Thay đổi Cảm xúc (Act Different, Feel Different)
1. Nhìn nhận bạn trong toàn bộ bối cảnh sống (Person-in-Environment)
Những áp lực từ gia đình, văn hóa, công việc hay các bước ngoặt trưởng thành không chỉ đơn giản là bối cảnh — chúng là một phần cốt lõi trong câu chuyện của bạn. Chúng ta sẽ cùng nhìn nhận cách môi trường xung quanh đang tác động đến thế giới nội tâm của bạn như thế nào.
2. Biến triệu chứng thành sự thấu cảm
Sự lo âu, né tránh hay kiệt sức luôn phục vụ mục đích sinh tồn: cố gắng bảo vệ bạn khỏi tổn thương và thất vọng. Thay vì phán xét hay cố gắng triệt tiêu chúng ngay lập tức, chúng ta sẽ cùng giải mã để hiểu rõ cơ chế phòng vệ vệ của bạn, từ đó tiếp cận bản thân bằng sự trắc ẩn thay vì chỉ trích.
3. Thay đổi hành động để dịch chuyển cảm xúc 
Nhận thức về bản thân nếu chỉ dừng lại ở tầng suy nghĩ thì chưa đủ để tạo ra thay đổi. Thay vì chờ đợi cảm xúc tốt lên mới bắt đầu hành động, tôi sẽ đồng hành cùng bạn thiết kế những "thử nghiệm hành vi" nhỏ, an toàn nhưng thực tế ngay trong đời sống hằng ngày để phá vỡ các vòng lặp bế tắc.
4. Hướng tới một cuộc sống trọn vẹn, không chỉ thuyên giảm triệu chứng
Mục tiêu cuối cùng của tham vấn không phải là biến bạn thành một người "không còn tổn thương", mà là giúp bạn xây dựng khả năng thích nghi và uyển chuyển về tâm lý. Bạn sẽ học cách chung sống hòa bình với những cảm xúc khó khăn và dành trọn vẹn năng lượng để sống một cuộc sống có ý nghĩa, dựa trên những giá trị sống mà bạn thực sự trân trọng.

- Frameworks Intro: Các phương pháp can thiệp tâm lý dựa trên bằng chứng được phối hợp linh hoạt và cá nhân hoá dành cho bạn:

Page will display only the title of each modality, displayed in smooth rectangular blocks in 4x1, and expand out into the body content as the title block is clicked
- Modalities List:
  - Liệu pháp Chấp nhận và Cam kết (ACT): Ngừng kiệt sức vì chiến đấu với cảm xúc, học cách bao dung với thế giới nội tâm và cam kết hành động theo giá trị sống.

  - Liệu pháp Nhận thức Hành vi (CBT): Nhận diện và thoát khỏi các "bẫy tư duy" cùng các niềm tin cốt lõi đang âm thầm thao túng cảm xúc.

  - Liệu pháp Kích hoạt Hành vi (BA): Thiết lập lại các hành động nhỏ để kích hoạt lại tâm trạng tích cực, đặc biệt hiệu quả với trầm cảm và mất động lực.

  - Liệu pháp dựa trên Tiến trình (PBT): Cá nhân hóa lộ trình dựa trên sự chuyển biến liên tục của bạn thay vì áp dụng một công thức cứng nhắc.

## 6. Core Services

- Eyebrow: Lĩnh vực hoạt động (EN: What I do)

- Section Title (H2): Ba mảng dịch vụ chính (EN: Three core service areas)

- Lead Paragraph: Từ cá nhân đến tổ chức và cộng đồng — mỗi mảng dịch vụ đều được xây dựng dựa trên khoa học thực chứng và sự đồng hành chuyên nghiệp. (EN: From individuals to organizations and communities — each rooted in evidence-based practice and genuine empathy.)

### Service Pillar 01: Tham vấn tâm lý cá nhân (EN: Individual Psychological Counseling)

- Description: Đồng hành cùng thanh thiếu niên và người trưởng thành vượt qua lo âu, trầm cảm, sang chấn và khó khăn trong các mối quan hệ. (EN: Walking with adolescents and adults through anxiety, depression, trauma, and relationship difficulties.)

- Key Highlights:
  - 30+ ca tiếp nhận mỗi năm (EN: 30+ cases accepted each year)

  - Tỉ lệ phục hồi cao, quay lại học tập & nghề nghiệp (EN: High recovery rate, return to study & career)

  - Phục hồi chức năng trong đời sống & hôn nhân (EN: Restored functioning in life & marriage)

- Ethical Standard: Bảo mật tuyệt đối theo đạo đức nghề nghiệp & chuẩn mực của Hiệp hội Công tác Xã hội Hoa Kỳ (NASW). (EN: Full confidentiality, per professional ethics & NASW (USA) standards.)

### Service Pillar 02: Tư vấn triển khai chương trình SKTT (EN: Mental-Health Program Consulting)

- Description: Tư vấn xây dựng và triển khai chương trình chăm sóc sức khỏe tinh thần cho doanh nghiệp, tổ chức phi chính phủ và đối tác cộng đồng. (EN: Consulting on the design and rollout of mental-health care programs for businesses, NGOs, and community partners.)

- Key Highlights:
  - Dẫn dắt Dự án Đẹp (NIMH R01 MH112630): Triển khai tại 36 trạm y tế xã phường trên 2 tỉnh miền Bắc, 200+ cán bộ được tập huấn, 14.000+ lượt sàng lọc · 1.300+ trường hợp can thiệp · 70%+ trường hợp cải thiện tình trạng trầm cảm (EN: Led the DEP Project (NIMH R01 MH112630): Implemented at 36 commune health stations across 2 Northern Vietnam provinces, 200+ health workers trained, 14,000+ screened · 1,300+ treated · 70%+ improved in depression symptoms)

  - Chuyên gia tư vấn SKTT cho dự án EpiC (FHI 360): Cải thiện quy trình sàng lọc SKTT tại các phòng khám điều trị HIV và PrEP, thiết lập bản đồ dịch vụ SKTT và mạng lưới chuyển gửi tới các cơ sở chăm sóc SKTT công tại TP. HCM (EN: Mental-health consultant for EpiC (FHI 360): Improved mental health screening at HIV and PrEP clinics, implemented mental health service mappings and referral network to public clinics and hospitals in HCMC)

### Service Pillar 03: Đào tạo & Giảng dạy (EN: Training & Teaching)

- Description: Thiết kế và giảng dạy các khóa đào tạo, workshop và talkshow về sức khỏe tinh thần cho nhân lực chuyên môn và công chúng. (EN: Designing and delivering training, workshops and talks on mental health for professionals and the public.)

- Key Highlights:
  - Diễn giả hợp tác cùng Intellect Vietnam (EN: Contracted Speaker with Intellect Vietnam)

  - Giảng viên thỉnh giảng tại VinUni & HUPH (EN: Guest lecturer at VinUni & HUPH)

## 7. Educational Workshops & Programs

- Eyebrow: Workshop & Chương trình (EN: Workshops & Programs)

- Section Title (H2): Các chương trình đã thiết kế & dẫn dắt (EN: Programs designed & delivered)

### Group A: Khóa học & Chương trình đào tạo (EN: Courses & Training Programs)

1. Sơ cứu Tâm lý (PFA) (EN: Psychological First Aid (PFA))
  - Tag: Sơ cứu Tâm lý (EN: Psychological First aid)

  - Description: Đào tạo kỹ năng hỗ trợ ban đầu cho người đang gặp khó khăn về tinh thần và nhận biết thời điểm cần can thiệp chuyên môn, dựa trên mô hình Sơ cứu Tâm lý 5 bước của ĐH Johns Hopkins. (EN: Skills to give initial support to people in distress and recognize when professional help is needed, based on the 5-step PFA model by Johns Hopkins University.)

2. Liệu pháp Kích hoạt Hành vi (BA) (EN: Behavior Activation (BA))
  - Tag: Trầm cảm (EN: Depression Counseling)

  - Description: Phương pháp dựa trên bằng chứng, hiệu quả với trầm cảm và lo âu nhẹ–vừa; xây dựng lối sống lành mạnh và phòng ngừa tái phát. (EN: An evidence-based intervention effective for mild-to-moderate depression and anxiety; building a healthy lifestyle and preventing mental health relapse.)

3. Kỹ năng Tham vấn Tình cảm (EN: Relationship Counseling Skills)
  - Tag: Tình cảm (EN: Relationships)

  - Description: Khóa nhập môn kỹ năng tham vấn tình cảm theo cách tiếp cận của liệu pháp Chấp nhận và Cam kết (ACT) tích hợp yếu tố văn hóa Việt Nam trong quan hệ tình cảm . (EN: An introductory course on the ACT approach to relationship counseling, integrating the cultural context of Vietnamese romantic relationships.)

4. Kỹ năng Nhận thức & Quản lý Cảm xúc (EN: Cognitive Skills for Emotion Management)
  - Tag: Quản lý Cảm xúc (EN: Emotion management)

  - Description: Ứng dụng các kỹ năng tâm lý học nhận thức để nhận diện và điều hòa cảm xúc, vượt qua những bẫy suy nghĩ và niềm tin giới hạn. (EN: Applying cognitive skills to recognize and regulate emotions and overcome everyday thinking traps.)

5. Sức khoẻ Tinh thần cho Doanh nghiệp (EN: Resilience & Wellness for Corporations)
  - Tag: Doanh nghiệp (EN: Corporates)

  - Description: Trang bị cho đội ngũ nhân viên kỹ năng quản lý căng thẳng, duy trì động lực và cân bằng công việc – cuộc sống. (EN: Equipping teams with skills to manage stress, sustain motivation, and balance work and life.)

6. Lớp Kỹ năng Tham vấn Cơ bản (EN: Basic Counseling Skills Class)
  - Tag: Đào tạo chuyên môn (EN: Professional)

  - Description: Đào tạo sinh viên cao học các ngành nghề trợ giúp: từ sàng lọc & đánh giá ban đầu, kỹ năng nền tảng đến thực hành Liệu pháp Kích hoạt Hành vi. (EN: Training for graduate students in the helping professions: from screening and initial assessment to core skills and practicing Behavior Activation.)

### Group B: Workshop & Talk đã thực hiện (EN: Workshops & Talks delivered)

- 2025: Diễn giả cho các Khách hàng Doanh nghiệp Đa quốc gia (EN: Speaker for Corporate MNC Clients) — Intellect

- 2024: Ứng dụng Tâm lý học giúp Nữ Lãnh đạo Thành công và Hạnh phúc (EN: Applied Psychology for Successful & Happy Women Leaders) — Aus4Skills · Hội Cựu Du học sinh Úc (EN: Aus4Skills · Australian Alumni)

- 2024: Nhận biết và Vượt qua Bẫy Nhận thức — Sống Quân bình và Hạnh phúc (EN: Recognizing & Overcoming Cognitive Traps — Living Balanced & Happy) — Gymhaus

- 2023: Phương pháp Cải thiện Động lực Học tập (EN: Improving Learning Motivation) — Trường Quản trị và Kinh doanh, Đại học Quốc gia Hà Nội (EN: Hanoi School of Business and Management, VNU)

- 2022: Xây dựng Lối sống Lành mạnh (EN: Building a Healthy Lifestyle) — Deloitte Vietnam

- 2022: Quản lý Động lực trong Tập luyện Thể chất (EN: Managing Motivation in Physical Training) — Swequity

- 2021: Quản lý Căng thẳng trong Đại dịch COVID (EN: Managing Stress during the COVID Pandemic) — Abeo Vietnam

## 8. Five Content & Training Pillars

- Eyebrow: Năm trụ cột đào tạo (EN: Five training pillars)

- Section Title (H2): Một khung nội dung, năm hướng đi (EN: One framework, five directions)

- Lead Paragraph: Mỗi trụ cột là một nhóm chủ đề Talk 60 phút hoặc Workshop 120 phút, may đo theo từng nhóm đối tượng. (EN: Each pillar is a cluster of topics delivered as a 60-minute Talk or a 120-minute Workshop, tailored to each audience.)

### Pillar 01: Hiểu mình & Vững vàng (EN: Self-Understanding & Resilience)

- Quản lý căng thẳng (EN: Stress management)

- Điều hoà cảm xúc (EN: Emotion regulation)

- Tư duy phát triển (EN: Growth mindset)

- Trắc ẩn với bản thân (EN: Self-compassion)

### Pillar 02: Cảm xúc & Kết nối (EN: Emotion & Connection)

- Trí tuệ cảm xúc (EN: Emotional intelligence)

- Lắng nghe chủ động (EN: Active listening)

- Ranh giới cá nhân (EN: Personal boundaries)

- Những câu chuyện khó nói (EN: Difficult conversations)

### Pillar 03: SKTT nơi làm việc (EN: Workplace Mental Health)

- Nâng cao nhận thức về SKTT (EN: Raising awareness)

- Tự chăm sóc và quản lý cảm xúc (EN: Self-care and emotion management)

- Phòng ngừa kiệt sức (EN: Burnout prevention)

- Sơ cứu Tâm lý tại công sở (EN: Psychological First Aid in the workplace)

### Pillar 04: Lãnh đạo Thấu cảm (EN: Empathetic Leadership)

- Xây văn hóa an toàn tâm lý (EN: Building psychological safety)

- Dẫn dắt qua biến động (EN: Leading through changes)

- Nhận diện & hỗ trợ sớm (EN: Early recognition & support)

- Trí tuệ cảm xúc cho lãnh đạo (EN: Emotional intelligence for leaders)

### Pillar 05: Trường học, Gia đình & Cộng đồng (EN: Schools, Family & Community)

- Năng lực cảm xúc–xã hội (EN: Social-emotional skills)

- Đồng hành cùng giáo viên (EN: Supporting teachers)

- Hỗ trợ cha mẹ (EN: Supporting parents)

- Trẻ em & vị thành niên (EN: Children & adolescents)

## 9. Contact me (VN: Liên hệ)

- Lead Paragraph: Dù bạn có nhu cầu tham vấn cho bản thân và người thân, hay mong muốn xây dựng chương trình sức khoẻ tinh thần cho tổ chức của mình - hãy nhắn cho ThS. Quân. (EN: Whether you’re seeking counseling for yourself or a loved one, or wanting to build a mental wellness program for your organization - reach out to Mr. Quan)
