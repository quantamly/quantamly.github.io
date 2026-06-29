# Landing Page Copy — ThS. Vũ Anh Quân

Handoff for Claude Code. All copy is bilingual. Drop VI into `data-vi` and EN into
`data-en` attributes on the matching elements. Keep the existing design system,
fonts, and color tokens. Keep the slogan "Act Different, Feel Different" unchanged.

Sections in this file:
1. Hero
2. Credibility strip (replaces the old stats block; tiles are now SPLIT)
3. Testimonials (BUILD BUT KEEP COMMENTED OUT — see instructions)
4. Story
5. Approach

---

## 1. HERO

Replace the current eyebrow, H1, role, and tag. CTAs stay as-is. The long credential
line moves to a small line UNDER the CTA row.

**Eyebrow (audience)**
- VI: `Dành cho những người trẻ tuổi đang đi qua một giai đoạn không dễ dàng`
- EN: `For young people going through a hard chapter`

**Headline (H1)** — primary choice
- VI: `Hiểu mình hơn, để sống nhẹ hơn.`
- EN: `Understand yourself, so life feels lighter.`

**Sub-line (tag)**
- VI: `Một không gian an toàn để bạn được lắng nghe, hiểu mình rõ hơn và từng bước tìm lại sự cân bằng — qua những buổi tham vấn và hỗ trợ tâm lý 1–1 dành cho những người trẻ tuổi đang đối diện với áp lực, tổn thương và những ngã rẽ của tuổi trưởng thành.`
- EN: `A safe space to be heard, to understand yourself more clearly, and to find your balance again — through one-on-one counseling conversations for young Vietnamese adults facing pressure, hurt, and the turning points of early adulthood.`

**Credential line (small, under the CTA row)**
- VI: `ThS. Vũ Anh Quân · Thạc sĩ Công tác Xã hội Lâm sàng (CUNY Silberman) · LMSW, tiểu bang New York, Hoa Kỳ`
- EN: `Quan Anh Vu, MSW · Master of Social Work, Clinical Practice (CUNY Silberman) · LMSW, New York, USA`

---

## 2. CREDIBILITY STRIP (replaces `<section class="stats">`)

Remove all four old stat tiles, including the `80%+ recovered` claim and the
`data-count` animation if it no longer fits. Build FIVE tiles. The client and
trainee numbers are now SPLIT into two separate tiles so each claim is
independently true.

**Tile 1 — Years**
- VI: `Gần 10 năm thực hành tham vấn từ Hoa Kỳ tới Việt Nam`
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
- VI: `Đào tạo & diễn thuyết cùng Intellect Vietnam, thành viên Hội Tâm lý trị liệu Việt Nam (VnPA)`
- EN: `Training & speaking with Intellect Vietnam, member of Vietnam Psychotherapy Association (VnPA)`

> If five tiles is too many for the layout, drop Tile 1 or Tile 2 first — never
> merge Tiles 3 and 4 back together.

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
- VI: `Vào thời phổ thông, một biến cố sức khỏe nghiêm trọng đã đưa Quân sang Mỹ điều trị. Giữa những ngày hoang mang nhất, một nhân viên công tác xã hội bệnh viện đã ở bên — không chỉ lo thủ tục, mà thật sự lắng nghe, giúp anh trụ lại và dần tìm thấy chỗ đứng của mình nơi đất khách.`
- EN: `In his teens, a serious health crisis brought Quan to the United States for treatment. In the most disorienting days of all, a hospital social worker stayed beside him: not just handling paperwork, but truly listening, helping him steady himself and slowly find his footing in a foreign land.`

**Pull quote**
- VI: `“Sự hỗ trợ tâm lý đúng người, đúng lúc đã thay đổi cuộc đời tôi. Đó là lý do tôi chọn nghề này.”`
- EN: `“The right support, from the right person, at the right time changed my life. That's why I do this work.”`

**Paragraph 2**
- VI: `Trải nghiệm ấy dẫn anh đến tấm bằng Cử nhân Tâm lý học (ĐH Brandeis) và Thạc sĩ Công tác Xã hội định hướng Lâm sàng (CUNY Silberman), rồi trở thành nhà thực hành sức khoẻ tâm thần được cấp phép (LMSW) tại tiểu bang New York Hoa Kỳ, tập trung vào các rối loạn tâm thần nghiêm trọng. Từ năm 2019, anh trở về Việt Nam để làm đúng điều đã từng cứu lấy mình: đồng hành tham vấn cho những người trẻ, và mang những kiến thức về sức khỏe tinh thần đến gần hơn với cộng đồng qua các buổi đào tạo, talkshow và workshop.`
- EN: `That experience led him to a BA in Psychology (Brandeis University) and a Master of Social Work with a clinical focus (CUNY Silberman), then to becoming a licensed mental health practitioner (LMSW) in New York State, specializing in the treatment of depression. Since 2019 he has been back in Vietnam doing the very thing that once saved him: walking alongside young people in counseling, and bringing mental-health knowledge closer to the community through training, talks, and workshops.`

---

## 5. APPROACH (streamlined)

Keep the Person-in-Environment concentric diagram. MOVE the Clinical-Social-Work-
vs-Clinical-Psychology comparison table off this landing page (to a future About /
Approach page). Replace the heavy chip list + fit list with the two blocks below.

**Intro (above the diagram)**
- VI: `Quân không nhìn khó khăn của bạn như một vấn đề tách rời, mà đặt nó trong toàn bộ bối cảnh sống: cơ thể, suy nghĩ, cảm xúc, các mối quan hệ và môi trường xung quanh bạn. Đó là tinh thần của Công tác Xã hội Lâm sàng — và cũng là lý do mỗi lộ trình trị liệu được thiết kế riêng cho từng người.`
- EN: `Quan doesn't treat your difficulty as an isolated problem — he places it within your whole context: your body, your thoughts, your emotions, your relationships, and the environment around you. That's the spirit of Clinical Social Work, and the reason every course of therapy is designed around the individual.`

**Modalities line (under the diagram)**
- VI: `Tùy vào bạn, Quân kết hợp linh hoạt các phương pháp đã được kiểm chứng: Liệu pháp Chấp nhận và Cam kết (ACT), Liệu pháp Nhận thức Hành vi (CBT), Liệu pháp Kích hoạt Hành vi (BA), và Liệu pháp dựa trên Tiến trình (PBT).`
- EN: `Depending on what you need, Quan flexibly combines evidence-based approaches: ACT, CBT, Behavioral Activation, and Process-Based Therapy (PBT).`
