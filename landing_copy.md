# Landing Page Copy — ThS. Vũ Anh Quân

Handoff for Claude Code. All copy is bilingual. Drop VI into `data-vi` and EN into
`data-en` attributes on the matching elements. Keep the existing design system,
fonts, and color tokens. Keep the slogan "Act Different, Feel Different" unchanged.

Sections in this file:
1. Hero
2. Credibility strip (replaces the old stats block; tiles are now SPLIT)
3. Testimonials (BUILD BUT KEEP COMMENTED OUT — see instructions)
4. Story

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
- VI: `Gần một thập kỷ qua, Quân đã đồng hành cùng hàng trăm người trẻ trên hành trình hiểu mình và tìm lại sự cân bằng.`
- EN: `Over nearly a decade, Quan has walked alongside hundreds of young people on the path to understanding themselves and finding their balance again.`

**Section heading (for the commented-out block)**
- VI: `Những người đã đồng hành cùng Quân`
- EN: `In their words`

**Sub-heading**
- VI: `Một vài chia sẻ từ thân chủ cũ (đã được sự đồng ý và ẩn danh).`
- EN: `A few words from former clients (shared with permission, anonymized).`

### Card 1 — N.A
- Quote VI: `“Cảm ơn Quân rất nhiều. Em đã tiếp sức cho chị qua từng chặng của cuộc sống.”`
- Quote EN: `“Thank you so much, Quan. You gave me strength through every stage of my life.”`
- Descriptor VI: `Chị N.A · 38 tuổi — vượt qua giai đoạn hôn nhân tổn thương, tìm lại sự tự tin và vững vàng trong sự nghiệp.`
- Descriptor EN: `N.A · 38 — moved through a painful marriage to rebuild her confidence and thrive in her career.`

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
- VI: `Câu chuyện của Quân bắt đầu năm 15 tuổi, với chẩn đoán ung thư bạch cầu. Biến cố ấy buộc anh phải sang Mỹ điều trị. Giữa những ngày tháng vừa kiệt sức vì bệnh tật, vừa lạc lõng ở một đất nước xa lạ, Quân nhận được sự hỗ trợ từ một nhân viên công tác xã hội lâm sàng tại bệnh viện. Người này đã trực tiếp thực hiện các buổi tham vấn tâm lý chuyên sâu cho Quân, cũng như hỗ trợ gia đình anh lo liệu các thủ tục thực tế như giáo dục, đi lại, ăn ở và tài chính.
Họ ngồi lại cùng anh, giúp anh đối diện và đi qua những cuộc khủng hoảng dồn dập đổ xuống lúc bấy giờ: nỗi sợ cái chết cận kề ở tuổi 15, áp lực thích nghi khi thay đổi môi trường sống quá đột ngột, cảm giác cô độc của một đứa trẻ mới lớn phải rời xa trường lớp, bạn bè, và cả sự tự ti khi chứng kiến cơ thể mình biến đổi, rụng tóc sau những đợt hóa trị dài ngày.
Những buổi trò chuyện trị liệu đó đã thay đổi hoàn toàn hướng đi cuộc đời Quân. Lần đầu tiên anh nhận ra rằng, đằng sau mỗi chẩn đoán là cả một thế giới nội tâm đầy xáo trộn cần được thấu hiểu. Cảm giác được lắng nghe và giữ chân mình lại trong những thời khắc đen tối nhất đã thôi thúc Quân trở thành một nhà tham vấn tâm lý chuyên nghiệp. Anh lựa chọn đi theo nhánh Lâm sàng của ngành Công tác Xã hội để có thể đồng hành với người khác bằng cả chuyên môn vững vàng lẫn sự thấu cảm của một người từng trải.`
- EN: `Quan’s story began with a battle with leukemia at age 15. This major life turning point required him to travel to the United States for medical treatment. Amid the physical exhaustion of illness and the absolute disorientation of being in a foreign land, he received support from a hospital social worker. This worker provided psychological counseling for Quan, as well as helping his family manage the logistics of education, transportation, housing and finances.
They sat down with him, helping him face and navigate the compounding crises that overwhelmed him at the time: the fear of death at just 15, the pressure of adapting to a sudden change of environment, the isolation of a teenager forced away from school and friends, and the deep insecurity of watching his body change, losing all his hair after long rounds of chemotherapy.
Those therapeutic conversations completely changed the trajectory of Quan’s life. For the first time, he realized that behind every medical diagnosis lies a turbulent inner world in need of understanding. Feeling heard and grounded during his darkest hours inspired Quan to become a professional counselor. He chose the Clinical branch of Social Work so that he could walk alongside others with both rigorous professional expertise and the authentic empathy of someone who has lived through it.`

**Pull quote**
- VI: `“Sự hỗ trợ đúng cách, từ đúng người và vào đúng thời điểm đã thay đổi cuộc đời tôi. Đó là lý do vì sao tôi làm công việc này.”`
- EN: `“The right support, from the right person, at the right time changed my life. That's why I do this work.”`

**Paragraph 3**
- VI: `Quân tốt nghiệp Cử nhân Tâm lý học tại Đại học Brandeis, sau đó hoàn thành bằng Thạc sĩ Công tác Xã hội theo định hướng Thực hành Lâm sàng tại Trường CUNY Silberman và nhận chứng chỉ hành nghề chuyên nghiệp (LMSW) của bang New York. Anh có nhiều năm làm việc trực tiếp tại các khu vực còn nhiều khó khăn ở Harlem và Jamaica tại thành phố New York, tập trung vào tham vấn tâm lý cho những cá nhân phải sống chung với những rối loạn tâm thần phức tạp như rối loạn lưỡng cực, tâm thần phân liệt, sang chấn tâm lý phức tạp, lo âu và trầm cảm dạng nặng.
Năm 2019, Quân trở về Việt Nam. Hiện tại, anh dành phần lớn thời gian để lắng nghe và đồng hành cùng các bạn trẻ qua các buổi tham vấn cá nhân 1-1, đồng thời tham gia tổ chức các buổi hội thảo, talkshow và chương trình đào tạo với mong muốn đưa những kiến thức thực tế về sức khỏe tinh thần đến gần hơn với cộng đồng.`
- EN: `Quan earned his BA in Psychology from Brandeis University, followed by a Master of Social Work with a clinical focus from the CUNY Silberman School of Social Work, and became a Licensed Master Social Worker (LMSW) in New York State. He spent years working directly in high-needs communities across Harlem and Jamaica, specializing in psychological counseling for individuals living with severe mental illnesses like bipolar disorder, schizophrenia, complex trauma, severe anxiety and depression.
In 2019, Quan returned home to Vietnam. Today, he devotes most of his time to listening to and walking alongside young adults through private 1-on-1 counseling, while also organizing workshops, talks, and training programs to bring practical mental health knowledge closer to the community.`