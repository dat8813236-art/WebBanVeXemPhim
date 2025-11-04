let currentMovie = null;
let selectedSeats = [];
let autoShowTicketTimer = null
const payButton = document.getElementById('main-pay-button');
// Thông tin phim mẫu
const movies = {
  AVT: {
    title: "AVATAR: DÒNG CHẢY CỦA NƯỚC",
    poster: "img/avatar.jpg",
    info: "Đạo diễn: James Cameron<br>Diễn viên: Sam Worthington, Zoe Saldana, Sigourney Weaver<br>Thể loại: Phiêu lưu, Khoa học viễn tưởng<br>Khởi chiếu: 16/12/2022<br>Thời lượng: 192 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 13+",
    summary:
      "Câu chuyện của “Avatar: Dòng Chảy Của Nước” lấy bối cảnh 10 năm sau những sự kiện xảy ra ở phần đầu tiên. Phim kể câu chuyện về gia đình mới của Jake Sully (Sam Worthington thủ vai) cùng những rắc rối theo sau và bi kịch họ phải chịu đựng khi phe loài người xâm lược hành tinh Pandora.",
    trailer: "https://www.youtube.com/embed/d9MyW72ELq0",
  },
  NWH: {
    title: "SPIDER-MAN: NO WAY HOME",
    poster: "img/SPIDERMAN.jpg",
    info: "Đạo diễn: Jon Watts<br>Diễn viên: Tom Holland, Zendaya, Benedict Cumberbatch<br>Thể loại: Hành động, Viễn tưởng<br>Khởi chiếu: 17/12/2021<br>Thời lượng: 148 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 13+",
    summary:
      "Spider-Man: No Way Home (Người Nhện: Không Còn Nhà) bắt đầu khi danh tính bị bại lộ, Peter Parker đến nhờ Doctor Strange giúp sức. Tuy nhiên, với loại bùa phép nguy hiểm, các vũ trụ va vào nhau và xuất hiện Green Globin, Doctor Octopus và Electro.",

    trailer: "https://www.youtube.com/embed/JfVOs4VSpmA",
  },
  OPP: {
    title: "OPPENHEIMER",
    poster: "img/Oppenheimer.jpg",
    info: "Đạo diễn: Christopher Nolan<br>Diễn viên: Cillian Murphy, Emily Blunt, Robert Downey Jr.<br>Thể loại: Chính kịch, Tiểu sử<br>Khởi chiếu: 21/07/2023<br>Thời lượng: 180 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 16+",
    summary:
      "Với nhân vật trung tâm là J. Robert Oppenheimer, nhà vật lý lý thuyết người đứng đầu phòng thí nghiệm Los Alamos, thời kỳ Thế chiến II. Ông đóng vai trò quan trọng trong Dự án Manhattan, tiên phong trong nhiệm vụ phát triển vũ khí hạt nhân, và được coi là một trong những “cha đẻ của bom nguyên tử”.",
    trailer: "https://www.youtube.com/embed/2CXFpWTxS3M",
  },
  BAR: {
    title: "BARBIE (2023)",
    poster: "img/Barbie.jpg",
    info: "Đạo diễn: Greta Gerwig<br>Diễn viên: Margot Robbie, Ryan Gosling<br>Thể loại: Hài hước, Phiêu lưu<br>Khởi chiếu: 21/07/2023<br>Thời lượng: 114 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 13+",
    summary:
      "Barbie 2023 kể về cô nàng búp bê barbie tóc vàng (Margot Robbie), bỗng một ngày tỉnh dậy liền thấy mọi thứ đảo lộn, khiến cô bị loại khỏi Barbieland vì là một con búp bê kém hoàn hảo (thực ra là một con người đến từ thế giới thực), Barbie lên đường đến thế giới thực để tìm kiếm hạnh phúc thực sự cùng với người đồng hành hoàn cảnh của mình là Ken.",
    trailer: "https://www.youtube.com/embed/pBk4NYhWNMM",
  },
  QAT: {
    title: "QUỶ ĂN TẠNG 3",
    poster: "img/QAT.jpg",
    info: "Đạo diễn: Lee Thongkham<br>Diễn viên: Mookda Narinrak, Nat Kitcharit<br>Thể loại: Kinh dị, Siêu nhiên<br>Khởi chiếu: 03/10/2025<br>Thời lượng: 105 phút<br>Ngôn ngữ: Tiếng Thái - Phụ đề Việt<br>Độ tuổi: 18+",
    summary:
      "Yak và gia đình phải đối mặt với nỗi kinh hoàng mới khi “Yee” – cô em út – đột ngột mất tích bí ẩn. Yak buộc phải cùng Yos, Yod và Papan lên đường đến “Bong Sa Noh Bian” – khu rừng ma ám – để cứu Yee trước khi những linh hồn tà ác một lần nữa bị đánh thức.",
    trailer: "https://www.youtube.com/embed/sISMd4wc33s",
  },
  VEN: {
    title: "VENOM 3: ĐIỆU NHẢY CUỐI CÙNG",
    poster: "img/Venom3.jpg",
    info: "Đạo diễn: Kelly Marcel<br>Diễn viên: Tom Hardy, Juno Temple<br>Thể loại: Hành động, Khoa học viễn tưởng<br>Khởi chiếu: 25/10/2025<br>Thời lượng: 115 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 16+",
    summary:
      "Sau những biến cố trong hai phần trước, Venom: The Last Dance (Venom: Kèo cuối) kể về việc lên đường chạy trốn của 'cặp đôi hoàn cảnh' Eddie Brock (Tom Hardy) và Venom dưới sự truy đuổi gắt gao từ hai phía.Một bên là các đặc vụ của Chính phủ Mỹ, một bên là các đồng loại của Venom do Knull - chúa tể của loài Symbiotes - cử xuống Trái Đất để bắt giữ hai nhân vật chính. Bộ đôi buộc phải đưa ra một quyết định tàn khốc sẽ hạ màn cho điệu nhảy cuối cùng của Venom và Eddie.",
    trailer: "https://www.youtube.com/embed/__2bjWbetsA",
  },
  MUA: {
    title: "MƯA ĐỎ",
    poster: "img/Muado.jpg",
    info: "Đạo diễn: Lương Đình Dũng<br>Diễn viên: NSƯT Hữu Châu, Kiều Trinh, Nguyễn Đình Tú<br>Thể loại: Chiến tranh, Chính kịch<br>Khởi chiếu: 22/08/2025<br>Thời lượng: 120 phút<br>Ngôn ngữ: Tiếng Việt<br>Độ tuổi: 16+",
    summary:
      "Phim truyện điện ảnh Mưa Đỏ nói về đề tài chiến tranh cách mạng, kịch bản của nhà văn Chu Lai, lấy cảm hứng và hư cấu từ sự kiện 81 ngày đêm chiến đấu anh dũng, kiên cường của nhân dân và cán bộ, chiến sĩ bảo vệ Thành Cổ Quảng Trị năm 1972. Tiểu đội 1 gồm toàn những thanh niên trẻ tuổi và đầy nhiệt huyết là một trong những đơn vị chiến đấu, bám trụ tại trận địa khốc liệt này. Bộ phim là khúc tráng ca bằng hình ảnh, là nén tâm nhang tri ân và tưởng nhớ những người con đã dâng hiến tuổi thanh xuân cho đất nước, mang âm hưởng của tình yêu, tình đồng đội thiêng liêng, là khát vọng hòa bình, hoà hợp dân tộc của nhân dân Việt Nam.",
    trailer: "https://www.youtube.com/embed/BD6PoZJdt_M",
  },
  CSM: {
    title: "CHAINSAW MAN – THE MOVIE: CHƯƠNG REZE",
    poster: "img/Chainsawman.jpg",
    info: "Đạo diễn: Ryū Nakayama<br>Diễn viên: Kikunosuke Toya, Tomori Kusunoki<br>Thể loại: Anime, Hành động, Giả tưởng<br>Khởi chiếu: 2025<br>Thời lượng: 115 phút<br>Ngôn ngữ: Tiếng Nhật - Phụ đề Việt<br>Độ tuổi: 16+",
    summary:
      "Tiếp nối series anime chuyển thể đình đám, Chainsaw Man lần đầu tiên oanh tạc màn ảnh rộng trong một cuộc phiêu lưu hoành tráng, ngập tràn các phân cảnh hành động. Ở phần trước, ta đã biết Denji từng làm Thợ Săn Quỷ cho yakuza để trả món nợ của cha mẹ nhưng bị họ phản bội và trừ khử. Trong khoảnh khắc hấp hối, chú chó quỷ cưa máy Pochita (người bạn đồng hành trung thành của Denji) đã đưa ra một khế ước, cứu sống cậu và hợp thể cùng cậu. Từ đó, một Quỷ Cưa bất khả chiến bại ra đời. Giờ đây ở Chainsaw Man – The Movie: Chương Reze, trong cuộc chiến tàn khốc giữa quỷ dữ, thợ săn quỷ và những kẻ thù trong bóng tối, một cô gái bí ẩn tên Reze xuất hiện trong thế giới của Denji. Denji buộc phải đối mặt với trận chiến sinh tử khốc liệt nhất của mình, một trận chiến được tiếp sức bởi tình yêu trong một thế giới nơi mọi người phải sinh tồn mà không biết bất kỳ luật lệ nào.",
    trailer: "https://www.youtube.com/embed/tAzAhDNdehs",
  },
  KNY: {
    title: "THANH GƯƠM DIỆT QUỶ: VÔ HẠN THÀNH",
    poster: "img/KNY.jpg",
    info: "Đạo diễn: Haruo Sotozaki<br>Diễn viên: Natsuki Hanae, Akari Kitō, Hiro Shimono<br>Thể loại: Anime, Hành động, Giả tưởng<br>Khởi chiếu: 14/08/2025<br>Thời lượng: 130 phút<br>Ngôn ngữ: Tiếng Nhật - Phụ đề Việt<br>Độ tuổi: 13+",
    summary:
      "Bộ phim đầu tiên trong bộ ba phim Thanh Gươm Diệt Quỷ: Vô Hạn Thành. Đây là phần bắt đầu cho trận chiến cuối cùng giữa Sát Quỷ Đoàn cùng Muzan và bè lũ quỷ tại Vô Hạn Thành. Bộ phim quy tụ gần như toàn bộ Trụ Cột & các nhân vật chính đối đầu nhóm Thượng Huyền mạnh nhất của Muzan; cùng bối cảnh Vô Hạn Thành phức tạp, kiến trúc đảo lộn và di chuyển liên tục hứa hẹn mang đến những trận chiến đấu đầy mãn nhãn.",
    trailer: "https://www.youtube.com/embed/rf0hW__Skow",
  },
  JJK: {
    title: "CHÚ THUẬT HỒI CHIẾN: HOÀI NGỌC / NGỌC CHIẾT – THE MOVIE",
    poster: "img/JJK.jpg",
    info: "Đạo diễn: Sunghoo Park<br>Diễn viên: Yuichi Nakamura, Takahiro Sakurai<br>Thể loại: Anime, Hành động, Giả tưởng<br>Khởi chiếu: 10/10/2025<br>Thời lượng: 112 phút<br>Ngôn ngữ: Tiếng Nhật - Phụ đề Việt<br>Độ tuổi: 13+",
    summary:
      "Chú Thuật Hồi Chiến: Hoài Ngọc / Ngọc Chiết – The Movie là phần phim đặc biệt với phiên bản chiếu rạp đưa khán giả quay về khoảng thời gian vĩnh viễn không trở lại, chứng kiến tuổi trẻ rực lửa khi Gojo và Geto còn kề vai sát cánh, cùng nhau khắc ghi dấu ấn không thể xóa nhòa. “Sau tất cả, chúng ta vẫn là người mạnh nhất!”",
    trailer: "https://www.youtube.com/embed/7pcZ7-B0Nrc",
  },
  FNAF2: {
    title: "NĂM ĐÊM KINH HOÀNG 2",
    poster: "img/5night.jpg",
    info: "Đạo diễn: Emma Tammi<br>Diễn viên: Josh Hutcherson, Matthew Lillard<br>Thể loại: Kinh dị, Giật gân<br>Khởi chiếu: 05/12/2025<br>Thời lượng: 110 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 18+",
    summary:
      "Phiên bản chuyển thể từ game Five Nights at Freddy’s gặt hái thành tích phòng vé đáng nể khi ra mắt năm 2023. Xác định rõ tệp khách hàng là fan trung thành của game, không phải khán giả đại chúng, Năm Đêm Kinh Hoàng không cố gắng để trở thành một bộ phim kinh dị độc lập xuất sắc. Bộ phim hướng đến cộng đồng chơi game, tưởng thưởng lòng trung thành của họ, dựa vào truyền thuyết và xây dựng một phiên bản điện ảnh chiều fan. Năm Đêm Kinh Hoàng 2 sẽ mang đến câu chuyện càng thêm u ám, các con rối máy càng nguy hiểm và bầu không khí rùng rợn được đẩy lên cấp độ mới.",
    trailer: "https://www.youtube.com/embed/HccJNOYMBjM",
  },
  QTVH: {
    title: "QUÁI THÚ VÔ HÌNH: VÙNG ĐẤT CHẾT CHÓC",
    poster: "img/QTVH.jpg",
    info: "Đạo diễn: Dan Trachtenberg<br>Diễn viên: Elle Fanning, Dimitrius Schuster-Koloamatangi<br>Thể loại: Hành động, Phiêu lưu<br>Khởi chiếu: 07/11/2025<br>Thời lượng: 120 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 18+",
    summary:
      "Trong tương lai, tại một hành tinh hẻo lánh, một Predator non nớt - kẻ bị chính tộc của mình ruồng bỏ - tìm thấy một đồng minh không ngờ tới là Thia và bắt đầu hành trình sinh tử nhằm truy tìm kẻ thù tối thượng. Bộ phim do Dan Trachtenberg - đạo diễn của Prey chỉ đạo và nằm trong chuỗi thương hiệu Quái Thú Vô Hình Predator.",
    trailer: "https://www.youtube.com/embed/Cvwwm6ww54M",
  },
  NMX: {
    title: "NHÀ MA XÓ",
    poster: "img/NMX.jpg",
    info: "Đạo diễn: Trương Dũng<br>Diễn viên: Quang Tuấn, Huỳnh Đông, Vân Trang, Hoàng Kim Ngọc, Lan Thy, NS Thanh Hằng, Lâm Thanh Nhã, Vương Khang, Thạch Kim Long<br>Thể loại: Gia đình, Kinh Dị<br>Khởi chiếu: 24/10/2025<br>Thời lượng: 110 phút<br>Ngôn ngữ: Tiếng Việt<br>Độ tuổi: 16+",
    summary:
      "Nhà Ma Xó xoay quanh câu chuyện về bà Hiền, người phụ nữ một mình nuôi 3 người con sau tai nạn chồng qua đời. Mọi chuyện bắt đầu khi người con trai giữa trong một lần thả lưới bắt cá vớt được một cái khạp bằng sành, nắp đậy kín. Từ đó, những hiện tượng kỳ quái liên tiếp xảy ra trong gia đình.",
    trailer: "https://www.youtube.com/embed/guW_r4a8l94",
  },
  ANN: {
    title: "ANNABELLE: ÁC QUỶ TRỞ VỀ",
    poster: "img/Annabelle.jpg",
    info: "Đạo diễn: Gary Dauberman<br>Diễn viên: Madison Iseman, McKenna Grace, Vera Farmiga<br>Thể loại: Kinh dị, Siêu nhiên<br>Khởi chiếu: 26/06/2019<br>Thời lượng: 106 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 18+",
    summary:
      "Để khắc chế sức mạnh của Annabelle, hai vợ chồng pháp sư trừ tà Ed và Lorraine Warren đã khóa kín nó trong một lồng kín và dùng lá bài thiêng để niêm phong nó lại, cách ly với thế giới bên ngoài. Tuy nhiên, một sự cố đã khiến sức mạnh của Annabelle trỗi dậy và đánh thức tất cả các cổ vật ma quái khác.",
    trailer: "https://www.youtube.com/embed/Rm-jr2XHr1M",
  },
  CLS: {
    title: "CÙ LAO XÁC SỐNG",
    poster: "img/Culao.jpg",
    info: "Đạo diễn: Nguyễn Thành Nam<br>Diễn viên: Huỳnh Đông, Trần Ngọc Vàng, Trần Phong<br>Thể loại: Kinh dị, Hành động<br>Khởi chiếu: 10/09/2022<br>Thời lượng: 93 phút<br>Ngôn ngữ: Tiếng Việt<br>Độ tuổi: 18+",
    summary:
      "Phim nói về hành trình của một nhóm người cùng nhau sinh tồn và cố gắng thoát khỏi sự truy đuổi của xác sống để đến chuyến phà cuối cùng tại một cù lao trên vùng hạ lưu sông Mekong khi đại dịch xác sống bùng nổ. Công - một thầy thuốc đông y nhưng đã mất đi niềm tin vào tình người, quyết định đưa cha mình và con gái tìm đường rời đi. Trong quá trình chạy trốn, họ thất lạc nhau, Công hoang mang đi tìm đứa con gái rồi vô tình gặp được một gia đình hiền lành, hai chàng trai ma lanh, đôi bạn trẻ lương thiện và một người đàn ông có trái tim dũng cảm. Họ cùng nhau hợp sức thành một nhóm chống trả để giành giật sự sống. Đúng lúc này, sự tị hiềm, tham lam, ích kỷ của lòng người nảy sinh và lại đẩy họ vào những thử thách sống còn. Liệu hành trình của nhóm người này sẽ đi về đâu khi đại dịch càng ngày càng lan rộng?",
    trailer: "https://www.youtube.com/embed/KOoJf57YElQ",
  },
  NBN: {
    title: "NHÀ BÀ NỮ",
    poster: "img/NhaBaNu.jpg",
    info: "Đạo diễn: Trấn Thành<br>Diễn viên: Trấn Thành, Uyển Ân, NSND Ngọc Giàu, Lê Giang<br>Thể loại: Tâm lý, Gia đình<br>Khởi chiếu: 22/01/2023<br>Thời lượng: 120 phút<br>Ngôn ngữ: Tiếng Việt<br>Độ tuổi: 16+",
    summary:
      "Review Nhà Bà Nữ và lịch chiếu Nhà Bà Nữ tại Moveek. Phim xoay quanh gia đình của bà Nữ (nghệ sĩ Lê Giang đảm nhận) - người làm nghề bán bánh canh. Truyện phim khắc họa mối quan hệ phức tạp, đa chiều xảy ra với các thành viên trong gia đình. Câu tagline (thông điệp) chính 'Mỗi gia đình đều có những bí mật' chứa nhiều ẩn ý về nội dung bộ phim muốn gửi gắm.",
    trailer: "https://www.youtube.com/embed/IkaP0KJWTsQ",
  },
  JEN: {
    title: "JOHNNY ENGLISH: TÁI XUẤT GIANG HỒ",
    poster: "img/JohnnyEnglish.jpg",
    info: "Đạo diễn: David Kerr<br>Diễn viên: Rowan Atkinson, Olga Kurylenko<br>Thể loại: Hành động, Hài hước<br>Khởi chiếu: 28/09/2018<br>Thời lượng: 89 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 13+",
    summary:
      "Năm ngày trước khi Thủ tướng Anh tổ chức Hội nghị thượng đỉnh, cả nước rơi vào mối đe dọa khi hệ thống an ninh của Cơ quan tình báo MI7 đã bị xâm nhập, tên tuổi của các mật vụ đều bị công khai. Để tìm ra kẻ đứng sau vụ việc này, một mật vụ đã nghỉ hưu đã được chọn lựa. Đó chính là Johnny English. Gánh vác trọng trách trên vai, Johnny English sẵn sàng “lao” vào nguy hiểm. Nhưng điều làm ông e ngại là xã hội đã thay đổi quá nhiều. Vũ khí chiến đấu giờ đây không còn là súng ống mà đã được thay thế bằng những vật dụng hiện đại và công nghệ. Lau sạch lớp bụi mờ bám trên chiếc xe thể thao Aston Martin, tìm lại bộ com-ple và đôi ủng có gắn từ tính, tự trang bị cho mình bộ phát sóng và bông bịt tai, lôi kéo Bough từ tầng hầm đã bị lãng quên ở trụ sở của MI7, Johnny English sẵn sàng thực hiện nhiệm vụ của mình. ",
    trailer: "https://www.youtube.com/embed/VtCoIzjG_U0",
  },
  SUP: {
    title: "SUPERMAN (2025)",
    poster: "img/Superman.jpg",
    info: "Đạo diễn: James Gunn<br>Diễn viên: David Corenswet, Rachel Brosnahan, Nicholas Hoult<br>Thể loại: Hành động, Siêu anh hùng<br>Khởi chiếu: 11/07/2025<br>Thời lượng: 130 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 13+",
    summary:
      "Mùa hè tới đây, Warner Bros. Pictures sẽ mang “Superman” - phim điện ảnh đầu tiên của DC Studios đến các rạp chiếu trên toàn cầu. Với phong cách riêng biệt của mình, James Gunn sẽ khắc họa người hùng huyền thoại trong vũ trụ DC hoàn toàn mới, với sự kết hợp độc đáo của các yếu tố hành động đỉnh cao, hài hước và vô cùng cảm xúc. Một Superman với lòng trắc ẩn và niềm tin vào sự thiện lương của con người sẽ xuất hiện đầy hứa hẹn trên màn ảnh.",
    trailer: "https://www.youtube.com/embed/Ox8ZLF6cGM0",
  },
  FANT4: {
    title: "BỘ TỨ SIÊU ĐẲNG: BƯỚC ĐI ĐẦU TIÊN",
    poster: "img/Fantastic4.jpg",
    info: "Đạo diễn: Matt Shakman<br>Diễn viên: Pedro Pascal, Vanessa Kirby, Joseph Quinn<br>TThể loại: Hành động, Khoa học viễn tưởng<br>Khởi chiếu: 25/07/2025<br>Thời lượng: 125 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 13+",
    summary:
      "Sau một chuyến bay thám hiểm vũ trụ, bốn phi hành gia bất ngờ sở hữu năng lực siêu nhiên và trở thành gia đình siêu anh hùng đầu tiên của Marvel. The Fantastic Four: First Steps là bộ phim mở đầu Phase 6, đặt nền móng cho siêu bom tấn Avengers: Doomsday trong năm sau.",
    trailer: "https://www.youtube.com/embed/Os76cYlbwOQ",
  },
  BDTS: {
    title: "BỖNG DƯNG TRÚNG SỐ",
    poster: "img/BDTS.jpg",
    info: "Đạo diễn: Park Gyu-tae<br>Diễn viên: Ko Kyung-pyo,Lee Yi-kyung,Um Mun-suk,Park Se-wan,Kwak Dong-yeon<br>Thể loại: Hài Hước,Chiến Tranh<br>Khởi chiếu: 23/09/2022<br>Thời lượng: 113 Phút<br>Ngôn ngữ: Tiếng Hàn<br>Độ tuổi: 13+",
    summary:
      "Một anh lính Hàn Quốc vô tình nhặt được tờ vé số độc đắc. Trớ trêu thay, tờ vé lại bị gió thổi bay qua ranh giới quân sự và rơi vào tay một anh lính Triều Tiên.<br>Từ đó, hai bên phải tìm cách bí mật gặp gỡ và thương lượng để chia tấm vé số.",
    trailer: "https://www.youtube.com/embed/1H9HPbWt3es",
  },
  johnwick: {
    title: "JOHN WICK",
    poster: "img/JohnWick.jpg",
    info: "Đạo diễn: Chad Stahelski<br>Diễn viên: Keanu Reeves, Ian McShane, Laurence Fishburne<br>Thể loại: Hành động, Giật gân<br>Khởi chiếu: 24/10/2014<br>Thời lượng: 101 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 18+",
    summary:
      "Bộ phim xoay quanh một sát thủ có tên là John Wick (do Keanu Reeves thủ vai), được thuê để giết chết chính người bạn chí cốt của mình. Bên cạnh đó, sự xuất hiện của một cô gái bí ẩn khiến phi vụ của anh gặp thêm nhiều rắc rối. Và rồi mọi chuyện sẽ đi đến đâu?",
    trailer: "https://www.youtube.com/embed/2AUmvWm5ZDQ",
  },
  madmax: {
    title: "MAD MAX: FURY ROAD",
    poster: "img/MadMaxFuryRoad.jpg",
    info: "Đạo diễn: George Miller<br>Diễn viên: Tom Hardy, Charlize Theron<br>Thể loại: Hành động, Hậu tận thế<br>Khởi chiếu: 15/05/2015<br>Thời lượng: 120 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 18+",
    summary:
      "Ở một nơi rất xa của trái đất, nơi ấy sa mạc bao phủ hầu hết bề mặt và con người thì điên cuồng đấu tranh vì mục đích sinh tồn. Trong thế giới này tồn tại hai phiến quân đang chạy trốn - những người được coi là có thể khôi phục lại trật tự thế giới. Trong đó có Max, một người đàn ông khốn khổ, lang thang vô định với mong muốn tìm sự bình yên sau cái chết của vợ con. Bên cạnh anh là Furiosa - một phụ nữ tìm cách trở về quê hương yêu dấu. Cả hai tình cờ gặp gỡ và cùng nhau gắng thoát khỏi sự truy đuổi của băng cướp sa mạc do tên trùm Immortan Joe cầm đầu.",
    trailer: "https://www.youtube.com/embed/hEJnMQG9ev8",
  },
  darkknight: {
    title: "THE DARK KNIGHT",
    poster: "img/TheDarkKnight.jpg",
    info: "Đạo diễn: Christopher Nolan<br>Diễn viên: Christian Bale, Heath Ledger, Aaron Eckhart<br>Thể loại: Hành động, Tội phạm<br>Khởi chiếu: 18/07/2008<br>Thời lượng: 152 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 16+",
    summary:
      "Thành phố Gotham chẳng hề được bình yên dù có sự hiện diện của Người Dơi. Có anh, bọn tội phạm vẫn hoành hành, bên cạnh đó, không ít kẻ quá khích còn cải trang thành Người Dơi khiến tình trạng càng thêm phức tạp. Thị trưởng thành phố đau đầu tìm cách giải quyết, một công tố viên mới với những nguyên tắc thép bắt đầu được người ta để ý. Lúc này, một loạt vụ cướp ngân hàng xảy ra. Bọn tội phạm hành động trót lọt ở tất cả những nơi chúng ra tay. Trong số đó có một kẻ đặc biệt tàn nhẫn, thẳng tay thủ tiêu đồng bọn khi xong việc. Không ngăn được bọn cướp vét sạch tiền của các ngân hàng, nhưng Người Dơi (Christian Bale) phá tan một vụ thỏa thuận buôn bán ma túy. Đó là lúc anh đụng độ The Joker (Heath Ledger), kẻ thù xảo quyệt và điên cuồng nhất.",
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
  },
  conjuring: {
    title: "THE CONJURING",
    poster: "img/TheConjuring.jpg",
    info: "Đạo diễn: James Wan<br>Diễn viên: Patrick Wilson, Vera Farmiga<br>Thể loại: Kinh dị, Siêu nhiên<br>Khởi chiếu: 19/07/2013<br>Thời lượng: 112 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 18+",
    summary:
      "The Conjuring dựa trên câu chuyện có thật về chuyện gia đình Perron bị ám khi đến trừ tà tại một nông trại ở Rhode Island trong những năm 1970. Chuyện phim xoay quanh vợ chồng nhà nghiên cứu hiện tượng kỳ bí Ed Warren và Lorraine Warren, họ đến giúp đỡ một gia đình ở một trang trại hẻo lánh đang bị nguyền rủa. Đối mặt với thế lực đen tối đầy sức mạnh, nhà Warren mới phát hiện ra chính bản thân họ cũng đang rơi vào mối nguy hiểm tột cùng, đe dọa tới cả mạng sống.",
    trailer: "https://www.youtube.com/embed/k10ETZ41q5o",
  },
  hereditary: {
    title: "HEREDITARY",
    poster: "img/Hereditary.jpg",
    info: "Đạo diễn: Ari Aster<br>Diễn viên: Toni Collette, Alex Wolff, Milly Shapiro<br>Thể loại: Kinh dị, Tâm lý<br>Khởi chiếu: 08/06/2018<br>Thời lượng: 127 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 18+",
    summary:
      "Phim kể về bi kịch của gia đình Graham, bắt đầu từ việc người bà ngoại Ellen qua đời. Nỗi buồn này chưa qua được bao lâu thì cô con gái út Charlie trong một lần đi đến buổi party với anh trai mình là Peter, đã ăn phải bánh đậu phộng và bị dị ứng. Peter vội vàng chở Charlie đi bệnh viện nhưng một tai nạn khủng khiếp đã xảy ra và Charlie chết ngay tại chỗ. Quá đau khổ với cái chết này cùng với áp lực công việc, người mẹ Annie đã phải sử dụng phương thức gọi hồn để trò chuyện với con gái mình. Tuy nhiên, việc làm này lại vô hình chung khiến cho bà, chồng bà – ông Steve và Peter đối mặt với một thế lực hắc ám thông qua việc những hiện tượng khó hiểu liên tục xảy đến với họ.",
    trailer: "https://www.youtube.com/embed/V6wWKNij_1M",
  },
  getout: {
    title: "GET OUT",
    poster: "img/GetOut.jpg",
    info: "Đạo diễn: Jordan Peele<br>Diễn viên: Daniel Kaluuya, Allison Williams<br>Thể loại: Kinh dị, Giật gân<br>Khởi chiếu: 24/02/2017<br>Thời lượng: 104 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 18+",
    summary:
      "Khi thấy tình cảm đã đến độ chin muồi, Rose (Allison Williams) quyết định sẽ đưa anh bạn trai người Mỹ gốc Phi Chris (Daniel Kaluuya) đến gặp bố mẹ mình. Ban đầu Chris cho rằng gia đình Rose đã có những phản ứng thái quá với mối quan hệ khác chủng tộc của con gái họ, nhưng càng về sau anh nhận ra có những sự thật ẩn giấu bên trong còn khủng khiếp hơn thế nữa.",
    trailer: "https://www.youtube.com/embed/DzfpyUB60YY",
  },
  notebook: {
    title: "THE NOTEBOOK",
    poster: "img/TheNotebook.jpg",
    info: "Đạo diễn: Nick Cassavetes<br>Diễn viên: Ryan Gosling, Rachel McAdams<br>Thể loại: Tình cảm, Lãng mạn<br>Khởi chiếu: 25/06/2004<br>Thời lượng: 123 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 13+",
    summary:
      "Nhật ký tình yêu (The Notebook) là một bộ phim điện ảnh tình cảm năm 2004 được chuyển thể từ tiểu thuyết cùng tên của nhà văn Nicholas Sparks. Phim được đạo diễn bởi Nick Cassavetes và có sự tham gia của các diễn viên nổi tiếng như Ryan Gosling, Rachel McAdams, James Garner và Gena Rowlands.Bộ phim xoay quanh câu chuyện tình lãng mạn giữa một chàng trai lao động nghèo tên là Noah và một cô gái giàu có tên là Allie, họ từng có một mối tình đẹp trong tuổi trẻ nhưng bắt buộc phải chia tay vì sự chênh lệch của địa vị xã hội. Đến khi họ già đi, Noah và Allie tình cờ gặp lại nhau và tình cảm lại nảy sinh, nhưng mối tình đó phải đối mặt với nhiều trở ngại, vì Allie đã có chồng và Noah đã trải qua quá khứ đầy cay đắng.Phim Nhật ký tình yêu mang đến cho khán giả một câu chuyện tình lãng mạn đầy xúc cảm và đầy nước mắt, giúp người xem cảm nhận được tình yêu trong cuộc sống có thể vượt qua mọi rào cản và thử thách để tìm đến hạnh phúc cuối cùn",
    trailer: "https://www.youtube.com/embed/BjJcYdEOI0k",
  },
  lalaland: {
    title: "LA LA LAND",
    poster: "img/LaLaLand.jpg",
    info: "Đạo diễn: Damien Chazelle<br>Diễn viên: Ryan Gosling, Emma Stone<br>Thể loại: Nhạc kịch, Tình cảm<br>Khởi chiếu: 09/12/2016<br>Thời lượng: 128 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 13+",
    summary:
      "Những Kẻ Khờ Mộng Mơ là câu chuyện tình yêu tuyệt đẹp thời hiện đại giữa chàng nhạc công piano tài hoa chuyên diễn tại các quán bar Sebastian (Ryan Gosling) và cô diễn viên mới nổi xinh đẹp Mia Dolan (Emma Stone). Thế nhưng, ở thiên đường điện ảnh Hollywood, tình yêu và sự thành công dường như không thể song hành. Khi thành công và sự nổi tiếng đến, họ sẽ phải đối mặt ra sao?",
    trailer: "https://www.youtube.com/embed/0pdqf4P9MB8",
  },
  astar: {
    title: "A STAR IS BORN",
    poster: "img/AStarIsBorn.jpg",
    info: "Đạo diễn: Bradley Cooper<br>Diễn viên: Lady Gaga, Bradley Cooper<br>Thể loại: Tình cảm, Âm nhạc<br>Khởi chiếu: 05/10/2018<br>Thời lượng: 136 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 16+",
    summary:
      "Câu chuyện tình của Jackson Maine – một nghệ sĩ nhạc đồng quê đang dần mờ nhạt, cùng cô nàng Ally dù có khả năng âm nhạc tiềm ẩn nhưng vẫn còn dè dặt thể hiện giọng hát trước đám đông. Chính Jackson Maine là người phát hiện ra tài năng của Ally và giúp cô dấn thấn vào con đường ca hát chuyên nghiệp. Khán giả sẽ được chứng kiến một câu chuyện tình lãng mạn mang màu sắc âm nhạc giữa Jackson và Ally. Tuy nhiên, trong lúc tình cảm giữa cả hai đang dần tiến triển, cũng là khi tình yêu của cặp đôi đón nhận những thử thách khắc nghiệt: sự nghiệp của Ally “lên như diều gặp gió” còn Jackson phải chật vật với vị trí của chính mình.",
    trailer: "https://www.youtube.com/embed/nSbzyEJ8X9E",
  },
  ryan: {
    title: "SAVING PRIVATE RYAN",
    poster: "img/SavingPrivateRyan.jpg",
    info: "Đạo diễn: Steven Spielberg<br>Diễn viên: Tom Hanks, Matt Damon<br>Thể loại: Chiến tranh, Chính kịch<br>Khởi chiếu: 24/07/1998<br>Thời lượng: 169 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 18+",
    summary:
      "Phim Giải Cứu Binh Nhì Ryan đưa người xem trở về cuộc đổ bộ lịch sử Normandi tại bãi biển Omaha đẫm máu. Tại đây, hai trong số bốn anh em nhà Ryan đã hy sinh. Tổng chỉ huy quân đội Mỹ, tướng George ra lệnh cho một toán lính lên đường tới Pháp tìm kiếm và giải cứu viên lính dù James Ryan.Đại úy John Miller thi hành một nhiệm vụ tưởng chừng như vô vọng, anh chọn sáu người cộng sự thân thiết đã từng vào sinh ra tử cùng. Họ cùng nhau tìm kiếm và giải cứu Ryan. Từng người lần lượt ngã xuống. Ám ảnh nhất là cái chết tức tưởi của Caparzo và cảnh Weiben ngồi chép lại bức thư đẫm máu của Caparzo gửi cho về cho mẹ.Sau bao hiểm nguy và mất mát, liệu đại úy Miller và đồng đội có tìm được binh nhì Ryan? Bộ phim là một bản hùng ca bi tráng về tình đồng đội, về tình người. ",
    trailer: "https://www.youtube.com/embed/zwhP5b4tD6g",
  },
  1917: {
    title: "1917",
    poster: "img/1917.jpg",
    info: "Đạo diễn: Sam Mendes<br>Diễn viên: George MacKay, Dean-Charles Chapman<br>Thể loại: Chiến tranh, Chính kịch<br>Khởi chiếu: 10/01/2020<br>Thời lượng: 119 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 16+",
    summary:
      "Đúng như tựa đề, phim lấy bối cảnh sau 3 năm chiến tranh đẫm máu từ đệ nhất thế chiến (1914-1918), giữa phe Liên minh (Đức- Áo- Hung) và phe Hiệp ước (Anh – Pháp- Mĩ – Nga), lúc này khi tình hình chiến trận giữa 2 phe vẫn chưa có dấu hiệu ngã ngũ thì quân Đức- trụ cột của phe Liên Minh bất ngờ tuyên bố rút quân ra khỏi chiến tuyến, chính từ tin tức đó khiến cho tiểu đoàn 2 thuộc quân Anh được chỉ huy bởi đại tá Mackenzie có lí do để tiến hành tấn công quân Đức nhằm giáng một đòn đau vào lực lượng quân Đức ở mặt trận phía Tây Châu Âu, một ngày trước trận chiến quân Anh bất ngờ nhận được tin đây hóa ra là cái bẫy mà quân Đức bày ra nhằm tiêu diệt toàn bộ quân lực của tiểu đoàn 2 với hơn 1600 quân ở chiến trận, không càng cách nào khác trong tình thế gấp gáp ấy một nhiệm vụ khẩn được đưa ra là ngay lập tức phát lệnh yêu cầu rút quân đến tiểu đoàn 2 ở mặt trận, việc này được giao cho hai binh nhất là Tom Blake (do Dean-Charles Chapman thủ vai) và Will Schofield (George MacKay đóng), hai anh chàng nhanh chóng nhận lệnh và bắt đầu hành trình thực hiện nhiệm vụ và cũng chính từ đây câu chuyện của phim 1917 mới chính thức được bắt đầu.",
    trailer: "https://www.youtube.com/embed/gZjQROMAh_s",
  },
  dunkirk: {
    title: "DUNKIRK",
    poster: "img/Dunkirk.jpg",
    info: "Đạo diễn: Christopher Nolan<br>Diễn viên: Fionn Whitehead, Tom Hardy, Cillian Murphy<br>Thể loại: Chiến tranh, Chính kịch<br>Khởi chiếu: 21/07/2017<br>Thời lượng: 106 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 16+",
    summary:
      "DUNKIRK là một trong những trận đánh nổi tiếng trong chiến trang thế giới thứ hai, diễn ra ở thành phố Dunkerque, Pháp từ ngày 26.05 đến 04.06 năm 1940 giữa quân đội đồng minh và Đức quốc xã. Hàng ngàn lính đồng minh bị bao vây trên chiến trường đầy bom đạn của kẻ thù và đứng trước nguy cơ bị phát xít Đức xóa sổ. Đối diện với cái chết cận kề, liệu còn chút hy vọng sống sót nào và liệu họ còn có thể trở về quê nhà?",
    trailer: "https://www.youtube.com/embed/T7O7BtBnsG4",
  },
  bladerunner: {
    title: "BLADE RUNNER 2049",
    poster: "img/BladeRunner2049.jpg",
    info: "Đạo diễn: Denis Villeneuve<br>Diễn viên: Ryan Gosling, Harrison Ford<br>Thể loại: Khoa học viễn tưởng, Hành động<br>Khởi chiếu: 06/10/2017<br>Thời lượng: 164 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 16+",
    summary:
      "Lấy bối cảnh 30 năm sau phần phim thứ nhất (2019 – 2049). Los Angeles năm 2049 không còn mưa liên miên nữa mà khô cằn như một sa mạc chết chóc, sĩ quan K (Ryan Gosling) trên đường tìm gặp Rick Deckard (Harrison Ford) viên cảnh sát nổi tiếng thuộc lực lượng Blade Runner, chuyên đi lùng bắt, xử lý những Replicant nổi loạn. Trong tàn tích của trụ sở cảnh sát cũ, 2 chiến binh xuất sắc thuộc hai thế hệ đã chạm trán nhau, 1 K tuổi trẻ tài cao và 1 Deckard già nua nhưng dũng mãnh, liệu cả hai có cùng hợp sức được với nhau để giải mã những bí mật khủng khiếp của Replicant nhằm tránh cho nhân loại đi đến con đường diệt vong.",
    trailer: "https://www.youtube.com/embed/q6hl9G8LP6s",
  },
  inception: {
    title: "INCEPTION",
    poster: "img/Inception.jpg",
    info: "Đạo diễn: Christopher Nolan<br>Diễn viên: Leonardo DiCaprio, Joseph Gordon-Levitt<br>Thể loại: Khoa học viễn tưởng, Hành động<br>Khởi chiếu: 16/07/2010<br>Thời lượng: 148 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 13+",
    summary:
      "Dom Cobb không phải là một đạo chích tầm thường, anh ta là bực thầy về đánh cắp, có thể xâm nhập vào cõi vô thức của bất kỳ người nào để đánh cắp những bí mật thầm kín nhất của người đó. Muốn thực hiện chuyện này, anh ta bước vào những giấc mơ của người đó. Anh nói với người trợ lý: “Chúng ta tạo ra thế giới của giấc mơ. Chúng ta đưa đối tượng vào thế giới giấc mơ đó và đối tượng sẽ phun ra hết những bí mật, rồi chúng ta sẽ đánh cắp các bí mật đó.” Nhưng đã đến lúc Cobb mệt mỏi với những tội phạm thực hiện theo yêu cầu của các tổng công ty. Anh muốn quay lại cuộc sống bình thường như mọi người. Muốn vậy, anh phải làm một công tác cuối cùng cho Saito, một đại gia nắm tẩy của Cobb trước nhà chức trách Mỹ.",
    trailer: "https://www.youtube.com/embed/8hP9D6kZseM",
  },
  interstellar: {
    title: "INTERSTELLAR",
    poster: "img/Interstellar.jpg",
    info: "Đạo diễn: Christopher Nolan<br>Diễn viên: Matthew McConaughey, Anne Hathaway, Jessica Chastain<br>Thể loại: Khoa học viễn tưởng, Chính kịch<br>Khởi chiếu: 07/11/2014<br>Thời lượng: 169 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 13+",
    summary:
      "Một đoàn thám hiểm vũ trụ sử dụng một hố đen mới được khám phá để du hành xuyên không gian đến những vì sao xa xôi và tìm kiếm hy vọng cho loài người. “Interstellar” là biên niên ký về cuộc phiêu lưu vĩ đại của một nhóm các nhà thám hiểm sử dụng khám phá mới về lỗ đen vũ trụ để vượt qua các giới hạn thông thường trong du hành không gian, chinh phục khoảng không mênh mông trên một chuyến hành trình xuyên dải ngân hà.. Xem lịch chiếu, review phim và mua vé xem phim dễ dàng hơn tại Moveek.",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  budapest: {
    title: "THE GRAND BUDAPEST HOTEL",
    poster: "img/GrandBudapestHotel.jpg",
    info: "Đạo diễn: Wes Anderson<br>Diễn viên: Ralph Fiennes, Tony Revolori, Saoirse Ronan<br>Thể loại: Hài hước, Phiêu lưu<br>Khởi chiếu: 28/03/2014<br>Thời lượng: 99 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 13+",
    summary:
      "Khách Sạn Đế Vương - The Grand Budapest Hotel là một bộ phim hài của đạo diễn Wes Anderson lấy cảm hứng từ tác phẩm của Stefan Zweig. Vào những năm 1930, khách sạn Grand Budapest là một nghỉ mát trượt tuyết phổ biến ở Châu Âu được quản lí bởi Gustave H. (Ralph Fiennes). Zero, một chàng trai hoạt động ngoài nghị viện, trở thành bạn và là người đỡ đầu của Gustave. Gustave tự hào vì đã cung cấp dịch vụ hạng sang của khách sạn cho khách, bao gồm cả sự mãn nguyện trong tình dục của những người phụ nữ lưu trú tại đó. Khi một trong những phụ nữ ông ta yêu chết một cách đầy bí ẩn, cũng chính là lúc Gustave đã tìm một bức tranh vô giá và nghi phạm đã bắt đầu lộ diện.",
    trailer: "https://www.youtube.com/embed/1Fg5iWmQjwk",
  },
  superbad: {
    title: "SUPERBAD",
    poster: "img/Superbad.jpg",
    info: "Đạo diễn: Greg Mottola<br>Diễn viên: Jonah Hill, Michael Cera<br>Thể loại: Hài hước, Thanh xuân<br>Khởi chiếu: 17/08/2007<br>Thời lượng: 113 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 16+",
    summary:
      "Phim Superbad kể về cuộc hành trình của đôi bạn thân Seth (Jonah Hill đóng) và Evan (Michael Cera) trên con đường tìm kiếm 'trái cấm' trước khi họ học lên cao hơn. Tuy nhiên ngoại hình cũng như tính cách của cả hai thì lại không được bình thường cho lắm. Seth béo ú còn Evan lại quá nhút nhát, đương nhiên họ không phải những đối tượng được các cô nàng 'ngó ngàng' tới.Chỉ còn ba tuần nữa là kết thúc những năm học phổ thông, vì vậy quyết tâm của cả hai ngày càng tăng cao. Cùng với 'mọt sách' Fogell (Christopher Mintz-Plasse), cả ba được cô bạn Jules cùng lớp mời đến tham dự bữa tiệc tại nhà riêng. Oái oăm thay khi Jules nhờ Seth mua rượu bia mang đến buổi party, cô hứa hẹn sẽ có rất 'nhiều điều thú vị' dành cho cậu tại đây nếu Seth thực hiện thành công phi vụ.",
    trailer: "https://www.youtube.com/embed/-1pcMC36uvs",
  },
  crazyrich: {
    title: "CRAZY RICH ASIANS",
    poster: "img/CrazyRichAsians.jpg",
    info: "Đạo diễn: Jon M. Chu<br>Diễn viên: Constance Wu, Henry Golding<br>Thể loại: Hài hước, Tình cảm<br>Khởi chiếu: 15/08/2018<br>Thời lượng: 120 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 13+",
    summary:
      "Mối tình của Rachel, cô gái gốc Hoa sống tại Mỹ, cùng bạn trai Nick. Cả hai đều là giảng viên của trường Đại Học New York. Một ngày nọ, khi Nick dẫn Rachel về Singapore ra mắt gia đình thì lúc này Rachel mới phát hiện ra gia thế 'khủng' của người yêu mà trước giờ cô không hề hay biết. Nick là đại thiếu gia của một gia đình giàu có nhất nhì ở Singapore và anh là một trong những người đàn ông đáng mơ ước nhất châu Á của các cô gái. Những tình cảnh éo le, dở khóc dở cười xảy ra khi Rachel, một cô gái bình dân lọt vào mắt xanh của đại thiếu gia siêu giàu, phải đối mặt với bà Eleanor, mẹ của Nick, một phụ nữ danh giá và khó tính.",
    trailer: "https://www.youtube.com/embed/14ZHRBfpeNg",
  },
  yourname: {
    title: "YOUR NAME",
    poster: "img/YourName.jpg",
    info: "Đạo diễn: Makoto Shinkai<br>Diễn viên: Ryunosuke Kamiki, Mone Kamishiraishi<br>Thể loại: Anime, Tình cảm<br>Khởi chiếu: 26/08/2016<br>Thời lượng: 107 phút<br>Ngôn ngữ: Tiếng Nhật - Phụ đề Việt<br>Độ tuổi: 13+",
    summary:
      "Bộ phim kể về Mitsuha – nữ sinh trung học sống ở một thị trấn nhỏ của vùng Itomori. Luôn chán chường với cuộc sống tẻ nhạt ở vùng thôn quê, Mitsuha ao ước kiếp sau được làm một anh chàng đẹp trai sống ở thủ đô Tokyo sôi động. Trong khi đó ở Tokyo, anh chàng Taki rất hài lòng với cuộc sống và công việc làm thêm ở một nhà hàng Italy sau giờ học. Tuy vậy, hằng đêm cậu vẫn mơ thấy mình trong cơ thể một cô gái thôn quê. Đến một hôm khi sự kiện nghìn năm có một là Sao Chổi tiến gần tới Trái đất, Taki và Mitsuha bỗng bị hoán đổi cơ thể. Cứ cách một ngày, Taki lại trở thành Mitsuha khám phá cuộc sống vùng quê và ngược lại, Mitsuha làm anh chàng nam sinh Tokyo háo hức với cuộc sống nơi đô thị ồn ào. Cứ thế, câu chuyện của Mitsuha và Taki diễn ra dẫn dắt khán giả đến những tình huống đặc biệt, dù cả hai chưa bao giờ gặp mặt hay thậm chí là biết tên của nhau.",
    trailer: "https://www.youtube.com/embed/xU47nhruN-Q",
  },
  aot: {
    title: "ATTACK ON TITAN",
    poster: "img/AttackOnTitan.jpg",
    info: "Đạo diễn: Tetsurō Araki<br>Diễn viên: Yuki Kaji, Yui Ishikawa<br>Thể loại: Anime, Hành động, Giả tưởng<br>Khởi chiếu: 2013–2023<br>Thời lượng: 25 phút/tập<br>Ngôn ngữ: Tiếng Nhật - Phụ đề Việt<br>Độ tuổi: 16+",
    summary:
      "Attack On Titan là bộ truyện được sáng tác bởi Hajime Isayama và chính thức ra mắt độc giả vào năm 2009. Tới năm 2013 thì Attack On Titan được Wit Studio phát triển thành anime. Với sự thành công của season 1, vào năm 2017 và 2019 thì season 2 và 3 lần lượt được cho ra mắt cũng dưới sự đảm nhiệm của Wit Studio. Tuy nhiên season cuối của bộ phim - season 4 lại được MAPPA Studio chịu trách nhiệm sản xuất.",
    trailer: "https://www.youtube.com/embed/3xNH23QkNpk",
  },
  spiritedaway: {
    title: "SPIRITED AWAY",
    poster: "img/SpiritedAway.jpg",
    info: "Đạo diễn: Hayao Miyazaki<br>Diễn viên: Rumi Hiiragi, Miyu Irino<br>Thể loại: Anime, Phiêu lưu, Giả tưởng<br>Khởi chiếu: 20/07/2001<br>Thời lượng: 125 phút<br>Ngôn ngữ: Tiếng Nhật - Phụ đề Việt<br>Độ tuổi: 13+",
    summary:
      "Bộ phim xoay quanh câu chuyện về Ogino Chihiro, một cô bé 10 tuổi luôn cảm thấy cuộc sống buồn chán. Sau đó, trong một lần chuyển nhà, tình cờ lạc đến một thành phố hoang vắng trong khi bố mẹ bị biến thành heo, Chihiro kinh hoàng phát hiện ra rằng mình bị mắc kẹt vào thế giới của những linh hồn và ma quỷ. Em ấy buộc phải tìm mọi cách để giải thoát bố mẹ và mình rồi trở về với thế giới loài người.",
    trailer: "https://www.youtube.com/embed/ByXuk9QqQkk",
  },
};
//Chọn Quốc Gia
function filterByCountry(country) {
  const allMovies = document.querySelectorAll(".movie-card");
  allMovies.forEach((movie) => {
    const movieCountry = movie.dataset.country?.toLowerCase();
    if (country === "all" || movieCountry === country) {
      movie.style.display = "block";
    } else {
      movie.style.display = "none";
    }
  });
}
// Chọn Thể Loại
function filterByGenre(genre) {
  const movies = document.querySelectorAll(".movie-card");
  movies.forEach((movie) => {
    const genres = movie.dataset.genre.split(" "); // tách thành mảng thể loại
    if (genre === "all" || genres.includes(genre)) {
      movie.style.display = "block";
    } else {
      movie.style.display = "none";
    }
  });
}

function showAllMovies() {
  // Đặt lại lựa chọn về mặc định
  currentCountry = "all";
  currentGenre = "all";

  // Hiện lại toàn bộ phim
  const allMovies = document.querySelectorAll(".movie-card");
  allMovies.forEach((movie) => {
    movie.style.display = "block";
  });
}

// Hiển thị chi tiết phim
function showDetails(movieKey) {
  currentMovie = movies[movieKey];
  document.getElementById("movie-list").classList.add("hidden");
  document.getElementById("movie-detail").classList.remove("hidden");
  // Ẩn tiêu đề "Movies Selection"
  const titleWrapper = document.getElementById("movie-selection-wrapper");
  if (titleWrapper) titleWrapper.style.display = "none";

  document.getElementById("detail-title").innerText = currentMovie.title;
  document.getElementById("detail-poster").src = currentMovie.poster;
  document.getElementById("detail-info").innerHTML = currentMovie.info;
  document.getElementById("detail-summary-text").innerHTML =
    currentMovie.summary || "";
}
// === THÊM TÍNH NĂNG XEM TRAILER KHI NHẤN NÚT PLAY ===
document.addEventListener("DOMContentLoaded", () => {
  // Thêm biểu tượng "Play" vào giữa mỗi ảnh phim
  const movieImages = document.querySelectorAll(".movie-card .movie-image");

  movieImages.forEach((container) => {
    const img = container.querySelector("img");
    if (!img) return;

    // Tạo nút play nếu chưa có
    if (!container.querySelector(".play-btn")) {
      const playBtn = document.createElement("div");
      playBtn.className = "play-btn";
      playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
      container.appendChild(playBtn);

      // Gắn sự kiện mở trailer
      playBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const code = img.getAttribute("data-code");
        if (!code || !movies[code] || !movies[code].trailer) {
          alert("Phim này chưa có trailer!");
          return;
        }

        const movie = movies[code];

        const overlay = document.createElement("div");
        overlay.className = "trailer-overlay";
        overlay.innerHTML = `
          <div class="trailer-box">
            <span class="close-trailer" onclick="closeTrailer()">&times;</span>
            <iframe
              src="${movie.trailer}?autoplay=1"
              title="Trailer ${movie.title}"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
        `;
        document.body.appendChild(overlay);

        // Đóng khi click nền đen
        overlay.addEventListener("click", (evt) => {
          if (evt.target === overlay) closeTrailer();
        });
      });
    }
  });
});
// === THÊM TÍNH NĂNG XEM TRAILER KHI NHẤN ẢNH ===
document.addEventListener("DOMContentLoaded", () => {
  // Bắt tất cả ảnh phim trong danh sách
  const movieImages = document.querySelectorAll(".movie-card img");
  
  movieImages.forEach((img) => {
    img.addEventListener("click", () => {
      // ... (Phần kiểm tra thông tin phim giữ nguyên)
      const code = img.getAttribute("data-code") || img.alt || "";
      if (!code || !movies[code] || !movies[code].trailer) {
        alert("Phim này chưa có trailer!");
        return;
      }
      const movie = movies[code];

      // 1. Tạo popup trailer
      const overlay = document.createElement("div");
      overlay.className = "trailer-overlay";
      overlay.innerHTML = `
        <div class="trailer-box">
          <span class="close-trailer" onclick="closeTrailer()">&times;</span>
          <iframe
            src="${movie.trailer}?autoplay=1"
            title="Trailer ${movie.title}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      `;
      document.body.appendChild(overlay);

      // 2. Gắn sự kiện ĐÓNG khi click vào nền đen (overlay)
      overlay.addEventListener("click", (evt) => {
        // Chỉ đóng khi phần tử được click (evt.target) chính là lớp phủ (overlay)
        if (evt.target === overlay) {
          closeTrailer();
        }
      });
      
      // 3. NGĂN SỰ KIỆN LAN TRUYỀN (propagation) khi click vào khung chứa video (trailer-box)
      const trailerBox = overlay.querySelector(".trailer-box");
      if (trailerBox) {
          trailerBox.addEventListener('click', (e) => {
              e.stopPropagation();
          });
      }
    });
  });
});

// === ĐÓNG TRAILER ===
function closeTrailer() {
  const overlay = document.querySelector(".trailer-overlay");
  if (overlay) {
      // Quan trọng: Dừng video bằng cách set src về rỗng
      const iframe = overlay.querySelector('iframe');
      if (iframe) {
          iframe.src = "";
      }
      overlay.remove();
  }
}

// Quay lại danh sách phim
function goBack() {
  document.getElementById("movie-detail").classList.add("hidden");
  document.getElementById("movie-list").classList.remove("hidden");
  // Hiện lại tiêu đề
  const titleWrapper = document.getElementById("movie-selection-wrapper");
  if (titleWrapper) titleWrapper.style.display = "block";
}

// Tới đặt vé
function goToBooking() {
  document.getElementById("movie-detail").classList.add("hidden");
  document.getElementById("booking").classList.remove("hidden");
    const qr = document.getElementById("qr-container");
  if (!qr.classList.contains('hidden')) qr.classList.add("hidden");
  const ticketContainer = document.getElementById("ticket-receipt-container");
  if (!ticketContainer.classList.contains('hidden')) ticketContainer.classList.add("hidden");
    const payBtn = document.querySelector("#booking button[onclick='proceedToPayment()']");
  if (payBtn) payBtn.style.display = "inline-block";
  if (autoShowTicketTimer) {
    clearTimeout(autoShowTicketTimer);
    autoShowTicketTimer = null;
  }
  generateSeats();
}
// Quay lại chi tiết
function goBackToDetail() {
  document.getElementById("booking").classList.add("hidden");
  document.getElementById("movie-detail").classList.remove("hidden");
}

// Sinh sơ đồ ghế A1–E8
function generateSeats() {
  const seatsContainer = document.getElementById("seats");
  seatsContainer.innerHTML = "";
  selectedSeats = [];

  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 10; col++) {
      const seat = document.createElement("div");
      seat.classList.add("seat");
      seat.innerText = String.fromCharCode(65 + row) + (col + 1);
      seat.onclick = () => toggleSeat(seat, seat.innerText);
      seatsContainer.appendChild(seat);
    }
    const br = document.createElement("div");
    br.style.flexBasis = "100%";
    seatsContainer.appendChild(br);
  }
}

// Toggle chọn ghế
function toggleSeat(seat, seatName) {
  if (selectedSeats.includes(seatName)) {
    selectedSeats = selectedSeats.filter((s) => s !== seatName);
    seat.classList.remove("selected");
  } else {
    selectedSeats.push(seatName);
    seat.classList.add("selected");
  }
  updateTotal();
}
// Cập nhật tổng tiền
function updateTotal() {
  const price = 80000; // giá 1 vé
  document.getElementById("selected-seats").innerText =
    selectedSeats.join(", ");
  document.getElementById("total-price").innerText = (
    selectedSeats.length * price
  ).toLocaleString();
}

// Thanh toán -> hiện QR
// HÀM 1: HÀM THANH TOÁN
function proceedToPayment(){
    if (selectedSeats.length === 0) {
        alert("Vui lòng chọn ghế trước khi thanh toán!");
        return;
    }

    // Ẩn nút "Thanh toán" ban đầu
    const payBtn = document.querySelector("#booking button[onclick='proceedToPayment()']");
    if (payBtn) payBtn.style.display = "none";

  // Hiện QR code
  document.getElementById("qr-container").classList.remove("hidden");
}

// ===== POPUP ĐĂNG NHẬP / ĐĂNG KÝ =====
function showLogin() {
  document.getElementById("loginBox").style.display = "flex";
}

function closeLogin() {
  document.getElementById("loginBox").style.display = "none";
}

function switchTab(evt, tabName) {
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  contents.forEach((c) => c.classList.remove("active"));
  tabs.forEach((t) => t.classList.remove("active"));

  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Đóng popup khi click ra ngoài
window.onclick = function (event) {
  const modal = document.getElementById("loginBox");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
function goHome() {
  // Ẩn các phần khác
  document.getElementById("movie-detail").classList.add("hidden");
  document.getElementById("booking").classList.add("hidden");
 document.getElementById("qr-container").classList.add("hidden");
  document.getElementById("ticket-receipt-container").classList.add("hidden");
  // Hiện lại danh sách phim
  document.getElementById("movie-list").classList.remove("hidden");

  // Hiện lại tiêu đề "Movie Selection"
  const titleWrapper = document.getElementById("movie-selection-wrapper");
  if (titleWrapper) titleWrapper.style.display = "block";
  // Hủy timer nếu có
  if (autoShowTicketTimer) {
    clearTimeout(autoShowTicketTimer);
    autoShowTicketTimer = null;
    console.log();
  }

  // Ẩn phần QR nếu đang hiện
  const qr = document.getElementById("qr-container");
  if (qr) qr.classList.add("hidden");

  // Hiện lại nút thanh toán nếu đã bị ẩn
  const payBtn = document.querySelector(
    "#booking button[onclick='proceedToPayment()']"
  );
  if (payBtn) payBtn.style.display = "inline-block";
  // Hiện lại màn hình chính
  document.getElementById("movie-list").classList.remove("hidden");
 showAllMovies();
  // Hiện tất cả phim
  showAllMovies();
}
// THANH TOÁN VÀ IN VÉ (Nguyễn Văn An)
//  XÁC NHẬN THANH TOÁN VÀ IN VÉ
function generateAndShowTicket() {
   
// --- LẤY THÔNG TIN ĐỂ IN VÉ ---
const movieTitle = currentMovie ? currentMovie.title : "Tên phim";
const showtime = document.getElementById('showtime').value;
const seats = document.getElementById('selected-seats').innerText;
const price = document.getElementById('total-price').innerText;
let ticketCode = document.getElementById('ticket-code')?.innerText;
    if (!ticketCode || ticketCode.length < 5) { // Kiểm tra xem mã vé hợp lệ chưa
       ticketCode = "CGV" + Math.floor(Math.random() * 900000 + 100000);
       const codeEl = document.getElementById('ticket-code');
       if (codeEl) codeEl.innerText = ticketCode;
       const ticketQRCodeWrapper = document.getElementById('ticket-qrcode-wrapper');
    if (!ticketQRCodeWrapper) {
        console.error("Không tìm thấy phần tử #ticket-qrcode-wrapper để tạo QR vé.");
        return;}
    }
const date = new Date().toLocaleDateString('vi-VN');
const cinema = document.querySelector('#ticket-receipt-container .ticket-header #ticket-cinema')?.innerText || "N/A";
ticketQRCodeWrapper.innerHTML = '';
// --- ĐIỀN THÔNG TIN VÀO VÉ ---
document.getElementById('ticket-cinema').innerText = cinema;
document.getElementById('ticket-movie-title').innerText = movieTitle;
document.getElementById('ticket-date').innerText = date;
document.getElementById('ticket-showtime').innerText = showtime;
document.getElementById('ticket-price').innerText = price;
document.getElementById('ticket-seats').innerText = seats;
document.getElementById('ticket-code').innerText = ticketCode;

// --- TẠO MÃ QR VÉ ---
const ticketQRCodeEl = document.getElementById('ticket-qrcode');
    if (!ticketQRCodeEl) {
        console.error("Không tìm thấy phần tử #ticket-qrcode để tạo QR vé.");
        return;
    }
const ticketInfo = `MaVe: ${ticketCode} | Phim: ${movieTitle} | Ghe: ${seats} | Suat: ${showtime} | Rap: ${cinema}`;
        if (!ticketQRCodeEl) {
            console.error("Không tìm thấy phần tử HTML với ID: ticket-qrcode");
            return; // Dừng lại nếu không tìm thấy
        }console.log("Dữ liệu QR:", ticketInfo);
ticketQRCodeEl.innerHTML = ''; // Xóa QR cũ
// Tạo QR code mới bằng thư viện
const qrCodeContainer = document.createElement('div');
    qrCodeContainer.id = 'dynamic-qr-code'; // ID riêng cho QR code động
    qrCodeContainer.style.width = '150px'; // Kích thước của QR code
    qrCodeContainer.style.height = '150px';
    qrCodeContainer.style.margin = '0 auto 10px auto'; // Căn giữa
    qrCodeContainer.style.border = '1px solid #eee';
    qrCodeContainer.style.borderRadius = '5px';
    ticketQRCodeWrapper.appendChild(qrCodeContainer); // Thêm div mới vào wrapper
    try {
        new QRCode(ticketQRCodeEl, {
            text: ticketInfo,
            width: 150,
            height: 150,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        console.log("Đã tạo QR code vé thành công.");
    } 
    
    catch (e) {
        console.error("Lỗi tạo QRCode vé:", e);
        ticketQRCodeEl.innerText = "Lỗi QR Vé";
    }
}
function startAutoShowTicket() {
    if (autoShowTicketTimer) {
        clearTimeout(autoShowTicketTimer);
    }
    console.log("Bắt đầu chờ 10 giây để báo thành công và tạo QR vé...");
    autoShowTicketTimer = setTimeout(() => {
      console.log("Hết 10 giây chờ.");
        alert("Đã thanh toán thành công!");
        generateAndShowTicket();
        autoShowTicketTimer = null;
    }, 10000);
}
