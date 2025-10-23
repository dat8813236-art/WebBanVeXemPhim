let currentMovie = null;
let selectedSeats = [];

// Thông tin phim mẫu
const movies = {
  AVT: {
    title: "AVATAR: DÒNG CHẢY CỦA NƯỚC",
    poster: "img/avatar.jpg",
    info: "Đạo diễn: James Cameron<br>Diễn viên: Sam Worthington, Zoe Saldana, Sigourney Weaver<br>Thể loại: Phiêu lưu, Khoa học viễn tưởng<br>Khởi chiếu: 16/12/2022<br>Thời lượng: 192 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 13+",
  },
  NWH: {
    title: "SPIDER-MAN: NO WAY HOME",
    poster: "img/SPIDERMAN.jpg",
    info: "Đạo diễn: Jon Watts<br>Diễn viên: Tom Holland, Zendaya, Benedict Cumberbatch<br>Thể loại: Hành động, Viễn tưởng<br>Khởi chiếu: 17/12/2021<br>Thời lượng: 148 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 13+",
  },
  OPP: {
    title: "OPPENHEIMER",
    poster: "img/Oppenheimer.jpg",
    info: "Đạo diễn: Christopher Nolan<br>Diễn viên: Cillian Murphy, Emily Blunt, Robert Downey Jr.<br>Thể loại: Chính kịch, Tiểu sử<br>Khởi chiếu: 21/07/2023<br>Thời lượng: 180 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 16+",
  },
  BAR: {
    title: "BARBIE (2023)",
    poster: "img/Barbie.jpg",
    info: "Đạo diễn: Greta Gerwig<br>Diễn viên: Margot Robbie, Ryan Gosling<br>Thể loại: Hài hước, Phiêu lưu<br>Khởi chiếu: 21/07/2023<br>Thời lượng: 114 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 13+",
  },
  QAT: {
    title: "QUỶ ĂN TẠNG 3",
    poster: "img/QAT.jpg",
    info: "Đạo diễn: Lee Thongkham<br>Diễn viên: Mookda Narinrak, Nat Kitcharit<br>Thể loại: Kinh dị, Siêu nhiên<br>Khởi chiếu: 03/10/2025<br>Thời lượng: 105 phút<br>Ngôn ngữ: Tiếng Thái - Phụ đề Việt<br>Độ tuổi: 18+",
  },
  VEN: {
    title: "VENOM 3: ĐIỆU NHẢY CUỐI CÙNG",
    poster: "img/Venom3.jpg",
    info: "Đạo diễn: Kelly Marcel<br>Diễn viên: Tom Hardy, Juno Temple<br>Thể loại: Hành động, Khoa học viễn tưởng<br>Khởi chiếu: 25/10/2025<br>Thời lượng: 115 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 16+",
  },
  MUA: {
    title: "MƯA ĐỎ",
    poster: "img/Muado.jpg",
    info: "Đạo diễn: Lương Đình Dũng<br>Diễn viên: NSƯT Hữu Châu, Kiều Trinh, Nguyễn Đình Tú<br>Thể loại: Chiến tranh, Chính kịch<br>Khởi chiếu: 22/08/2025<br>Thời lượng: 120 phút<br>Ngôn ngữ: Tiếng Việt<br>Độ tuổi: 16+",
  },
  CSM: {
    title: "CHAINSAW MAN – THE MOVIE: CHƯƠNG REZE",
    poster: "img/Chainsawman.jpg",
    info: "Đạo diễn: Ryū Nakayama<br>Diễn viên: Kikunosuke Toya, Tomori Kusunoki<br>Thể loại: Anime, Hành động, Giả tưởng<br>Khởi chiếu: 2025<br>Thời lượng: 115 phút<br>Ngôn ngữ: Tiếng Nhật - Phụ đề Việt<br>Độ tuổi: 16+",
  },
  KNY: {
    title: "THANH GƯƠM DIỆT QUỶ: VÔ HẠN THÀNH",
    poster: "img/KNY.jpg",
    info: "Đạo diễn: Haruo Sotozaki<br>Diễn viên: Natsuki Hanae, Akari Kitō, Hiro Shimono<br>Thể loại: Anime, Hành động, Giả tưởng<br>Khởi chiếu: 14/08/2025<br>Thời lượng: 130 phút<br>Ngôn ngữ: Tiếng Nhật - Phụ đề Việt<br>Độ tuổi: 13+",
  },
  JJK: {
    title: "CHÚ THUẬT HỒI CHIẾN: HOÀI NGỌC / NGỌC CHIẾT – THE MOVIE",
    poster: "img/JJK.jpg",
    info: "Đạo diễn: Sunghoo Park<br>Diễn viên: Yuichi Nakamura, Takahiro Sakurai<br>Thể loại: Anime, Hành động, Giả tưởng<br>Khởi chiếu: 10/10/2025<br>Thời lượng: 112 phút<br>Ngôn ngữ: Tiếng Nhật - Phụ đề Việt<br>Độ tuổi: 13+",
  },
  FNAF2: {
    title: "NĂM ĐÊM KINH HOÀNG 2",
    poster: "img/5night.jpg",
    info: "Đạo diễn: Emma Tammi<br>Diễn viên: Josh Hutcherson, Matthew Lillard<br>Thể loại: Kinh dị, Giật gân<br>Khởi chiếu: 05/12/2025<br>Thời lượng: 110 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 18+",
  },
  QTVH: {
    title: "QUÁI THÚ VÔ HÌNH: VÙNG ĐẤT CHẾT CHÓC",
    poster: "img/QTVH.jpg",
    info: "Đạo diễn: Dan Trachtenberg<br>Diễn viên: Elle Fanning, Dimitrius Schuster-Koloamatangi<br>Thể loại: Hành động, Phiêu lưu<br>Khởi chiếu: 07/11/2025<br>Thời lượng: 120 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 18+",
  },
  NMX: {
    title: "NHÀ MA XÓ",
    poster: "img/NMX.jpg",
    info: "Đạo diễn: Trương Dũng<br>Diễn viên: Quang Tuấn, Huỳnh Đông, Vân Trang, Hoàng Kim Ngọc, Lan Thy, NS Thanh Hằng, Lâm Thanh Nhã, Vương Khang, Thạch Kim Long<br>Thể loại: Gia đình, Kinh Dị<br>Khởi chiếu: 24/10/2025<br>Thời lượng: 110 phút<br>Ngôn ngữ: Tiếng Việt<br>Độ tuổi: 16+",
  },
  ANN: {
    title: "ANNABELLE: ÁC QUỶ TRỞ VỀ",
    poster: "img/Annabelle.jpg",
    info: "Đạo diễn: Gary Dauberman<br>Diễn viên: Madison Iseman, McKenna Grace, Vera Farmiga<br>Thể loại: Kinh dị, Siêu nhiên<br>Khởi chiếu: 26/06/2019<br>Thời lượng: 106 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 18+",
  },
  CLS: {
    title: "CÙ LAO XÁC SỐNG",
    poster: "img/Culao.jpg",
    info: "Đạo diễn: Nguyễn Thành Nam<br>Diễn viên: Huỳnh Đông, Trần Ngọc Vàng, Trần Phong<br>Thể loại: Kinh dị, Hành động<br>Khởi chiếu: 10/09/2022<br>Thời lượng: 93 phút<br>Ngôn ngữ: Tiếng Việt<br>Độ tuổi: 18+",
  },
  NBN: {
    title: "NHÀ BÀ NỮ",
    poster: "img/NhaBaNu.jpg",
    info: "Đạo diễn: Trấn Thành<br>Diễn viên: Trấn Thành, Uyển Ân, NSND Ngọc Giàu, Lê Giang<br>Thể loại: Tâm lý, Gia đình<br>Khởi chiếu: 22/01/2023<br>Thời lượng: 120 phút<br>Ngôn ngữ: Tiếng Việt<br>Độ tuổi: 16+",
  },
  JEN: {
    title: "JOHNNY ENGLISH: TÁI XUẤT GIANG HỒ",
    poster: "img/JohnnyEnglish.jpg",
    info: "Đạo diễn: David Kerr<br>Diễn viên: Rowan Atkinson, Olga Kurylenko<br>Thể loại: Hành động, Hài hước<br>Khởi chiếu: 28/09/2018<br>Thời lượng: 89 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 13+",
  },
  SUP: {
    title: "SUPERMAN (2025)",
    poster: "img/Superman.jpg",
    info: "Đạo diễn: James Gunn<br>Diễn viên: David Corenswet, Rachel Brosnahan, Nicholas Hoult<br>Thể loại: Hành động, Siêu anh hùng<br>Khởi chiếu: 11/07/2025<br>Thời lượng: 130 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 13+",
  },
  FANT4: {
    title: "BỘ TỨ SIÊU ĐẲNG: BƯỚC ĐI ĐẦU TIÊN",
    poster: "img/Fantastic4.jpg",
    info: "Đạo diễn: Matt Shakman<br>Diễn viên: Pedro Pascal, Vanessa Kirby, Joseph Quinn<br>TThể loại: Hành động, Khoa học viễn tưởng<br>Khởi chiếu: 25/07/2025<br>Thời lượng: 125 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 13+",
  },
  BDTS: {
    title: "BỖNG DƯNG TRÚNG SỐ",
    poster: "img/BDTS.jpg",
    info: "Đạo diễn: Park Gyu-tae<br>Diễn viên: Ko Kyung-pyo,Lee Yi-kyung,Um Mun-suk,Park Se-wan,Kwak Dong-yeon<br>Thể loại: Hài Hước,Chiến Tranh<br>Khởi chiếu: 23/09/2022<br>Thời lượng: 113 Phút<br>Ngôn ngữ: Tiếng Hàn<br>Độ tuổi: 13+",
    summary:
      "Một anh lính Hàn Quốc vô tình nhặt được tờ vé số độc đắc. Trớ trêu thay, tờ vé lại bị gió thổi bay qua ranh giới quân sự và rơi vào tay một anh lính Triều Tiên.<br>Từ đó, hai bên phải tìm cách bí mật gặp gỡ và thương lượng để chia tấm vé số.",
  },
  johnwick: {
    title: "JOHN WICK",
    poster: "img/JohnWick.jpg",
    info: "Đạo diễn: Chad Stahelski<br>Diễn viên: Keanu Reeves, Ian McShane, Laurence Fishburne<br>Thể loại: Hành động, Giật gân<br>Khởi chiếu: 24/10/2014<br>Thời lượng: 101 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 18+",
  },
  madmax: {
    title: "MAD MAX: FURY ROAD",
    poster: "img/MadMaxFuryRoad.jpg",
    info: "Đạo diễn: George Miller<br>Diễn viên: Tom Hardy, Charlize Theron<br>Thể loại: Hành động, Hậu tận thế<br>Khởi chiếu: 15/05/2015<br>Thời lượng: 120 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 18+",
  },
  darkknight: {
    title: "THE DARK KNIGHT",
    poster: "img/TheDarkKnight.jpg",
    info: "Đạo diễn: Christopher Nolan<br>Diễn viên: Christian Bale, Heath Ledger, Aaron Eckhart<br>Thể loại: Hành động, Tội phạm<br>Khởi chiếu: 18/07/2008<br>Thời lượng: 152 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 16+",
  },
  conjuring: {
    title: "THE CONJURING",
    poster: "img/TheConjuring.jpg",
    info: "Đạo diễn: James Wan<br>Diễn viên: Patrick Wilson, Vera Farmiga<br>Thể loại: Kinh dị, Siêu nhiên<br>Khởi chiếu: 19/07/2013<br>Thời lượng: 112 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 18+",
  },
  hereditary: {
    title: "HEREDITARY",
    poster: "img/Hereditary.jpg",
    info: "Đạo diễn: Ari Aster<br>Diễn viên: Toni Collette, Alex Wolff, Milly Shapiro<br>Thể loại: Kinh dị, Tâm lý<br>Khởi chiếu: 08/06/2018<br>Thời lượng: 127 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 18+",
  },
  getout: {
    title: "GET OUT",
    poster: "img/GetOut.jpg",
    info: "Đạo diễn: Jordan Peele<br>Diễn viên: Daniel Kaluuya, Allison Williams<br>Thể loại: Kinh dị, Giật gân<br>Khởi chiếu: 24/02/2017<br>Thời lượng: 104 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 18+",
  },
  notebook: {
    title: "THE NOTEBOOK",
    poster: "img/TheNotebook.jpg",
    info: "Đạo diễn: Nick Cassavetes<br>Diễn viên: Ryan Gosling, Rachel McAdams<br>Thể loại: Tình cảm, Lãng mạn<br>Khởi chiếu: 25/06/2004<br>Thời lượng: 123 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 13+",
  },
  lalaland: {
    title: "LA LA LAND",
    poster: "img/LaLaLand.jpg",
    info: "Đạo diễn: Damien Chazelle<br>Diễn viên: Ryan Gosling, Emma Stone<br>Thể loại: Nhạc kịch, Tình cảm<br>Khởi chiếu: 09/12/2016<br>Thời lượng: 128 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 13+",
  },
  astar: {
    title: "A STAR IS BORN",
    poster: "img/AStarIsBorn.jpg",
    info: "Đạo diễn: Bradley Cooper<br>Diễn viên: Lady Gaga, Bradley Cooper<br>Thể loại: Tình cảm, Âm nhạc<br>Khởi chiếu: 05/10/2018<br>Thời lượng: 136 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 16+",
  },
  ryan: {
    title: "SAVING PRIVATE RYAN",
    poster: "img/SavingPrivateRyan.jpg",
    info: "Đạo diễn: Steven Spielberg<br>Diễn viên: Tom Hanks, Matt Damon<br>Thể loại: Chiến tranh, Chính kịch<br>Khởi chiếu: 24/07/1998<br>Thời lượng: 169 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 18+",
  },
  1917: {
    title: "1917",
    poster: "img/1917.jpg",
    info: "Đạo diễn: Sam Mendes<br>Diễn viên: George MacKay, Dean-Charles Chapman<br>Thể loại: Chiến tranh, Chính kịch<br>Khởi chiếu: 10/01/2020<br>Thời lượng: 119 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 16+",
  },
  dunkirk: {
    title: "DUNKIRK",
    poster: "img/Dunkirk.jpg",
    info: "Đạo diễn: Christopher Nolan<br>Diễn viên: Fionn Whitehead, Tom Hardy, Cillian Murphy<br>Thể loại: Chiến tranh, Chính kịch<br>Khởi chiếu: 21/07/2017<br>Thời lượng: 106 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 16+",
  },
  bladerunner: {
    title: "BLADE RUNNER 2049",
    poster: "img/BladeRunner2049.jpg",
    info: "Đạo diễn: Denis Villeneuve<br>Diễn viên: Ryan Gosling, Harrison Ford<br>Thể loại: Khoa học viễn tưởng, Hành động<br>Khởi chiếu: 06/10/2017<br>Thời lượng: 164 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 16+",
  },
  inception: {
    title: "INCEPTION",
    poster: "img/Inception.jpg",
    info: "Đạo diễn: Christopher Nolan<br>Diễn viên: Leonardo DiCaprio, Joseph Gordon-Levitt<br>Thể loại: Khoa học viễn tưởng, Hành động<br>Khởi chiếu: 16/07/2010<br>Thời lượng: 148 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 13+",
  },
  interstellar: {
    title: "INTERSTELLAR",
    poster: "img/Interstellar.jpg",
    info: "Đạo diễn: Christopher Nolan<br>Diễn viên: Matthew McConaughey, Anne Hathaway, Jessica Chastain<br>Thể loại: Khoa học viễn tưởng, Chính kịch<br>Khởi chiếu: 07/11/2014<br>Thời lượng: 169 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 13+",
  },
  budapest: {
    title: "THE GRAND BUDAPEST HOTEL",
    poster: "img/GrandBudapestHotel.jpg",
    info: "Đạo diễn: Wes Anderson<br>Diễn viên: Ralph Fiennes, Tony Revolori, Saoirse Ronan<br>Thể loại: Hài hước, Phiêu lưu<br>Khởi chiếu: 28/03/2014<br>Thời lượng: 99 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 13+",
  },
  superbad: {
    title: "SUPERBAD",
    poster: "img/Superbad.jpg",
    info: "Đạo diễn: Greg Mottola<br>Diễn viên: Jonah Hill, Michael Cera<br>Thể loại: Hài hước, Thanh xuân<br>Khởi chiếu: 17/08/2007<br>Thời lượng: 113 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 16+",
  },
  crazyrich: {
    title: "CRAZY RICH ASIANS",
    poster: "img/CrazyRichAsians.jpg",
    info: "Đạo diễn: Jon M. Chu<br>Diễn viên: Constance Wu, Henry Golding<br>Thể loại: Hài hước, Tình cảm<br>Khởi chiếu: 15/08/2018<br>Thời lượng: 120 phút<br>Ngôn ngữ: Tiếng Anh - Phụ đề Việt<br>Độ tuổi: 13+",
  },
  yourname: {
    title: "YOUR NAME",
    poster: "img/YourName.jpg",
    info: "Đạo diễn: Makoto Shinkai<br>Diễn viên: Ryunosuke Kamiki, Mone Kamishiraishi<br>Thể loại: Anime, Tình cảm<br>Khởi chiếu: 26/08/2016<br>Thời lượng: 107 phút<br>Ngôn ngữ: Tiếng Nhật - Phụ đề Việt<br>Độ tuổi: 13+",
  },
  aot: {
    title: "ATTACK ON TITAN",
    poster: "img/AttackOnTitan.jpg",
    info: "Đạo diễn: Tetsurō Araki<br>Diễn viên: Yuki Kaji, Yui Ishikawa<br>Thể loại: Anime, Hành động, Giả tưởng<br>Khởi chiếu: 2013–2023<br>Thời lượng: 25 phút/tập<br>Ngôn ngữ: Tiếng Nhật - Phụ đề Việt<br>Độ tuổi: 16+",
  },
  spiritedaway: {
    title: "SPIRITED AWAY",
    poster: "img/SpiritedAway.jpg",
    info: "Đạo diễn: Hayao Miyazaki<br>Diễn viên: Rumi Hiiragi, Miyu Irino<br>Thể loại: Anime, Phiêu lưu, Giả tưởng<br>Khởi chiếu: 20/07/2001<br>Thời lượng: 125 phút<br>Ngôn ngữ: Tiếng Nhật - Phụ đề Việt<br>Độ tuổi: 13+",
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

  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 8; col++) {
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
function proceedToPayment() {
  if (selectedSeats.length === 0) {
    alert("Vui lòng chọn ghế trước khi thanh toán!");
    return;
  }

  // Ẩn nút thanh toán để tránh bấm lại
  document.querySelector(
    "#booking button[onclick='proceedToPayment()']"
  ).style.display = "none";

  // Hiện QR code
  document.getElementById("qr-container").classList.remove("hidden");

  // Log ra console (sau này có thể gửi server)
  console.log("Phim:", currentMovie.title);
  console.log("Ghế:", selectedSeats.join(", "));
  console.log(
    "Tổng tiền:",
    document.getElementById("total-price").innerText + " VND"
  );
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

  // Hiện lại danh sách phim
  document.getElementById("movie-list").classList.remove("hidden");

  // Hiện lại tiêu đề "Movie Selection"
  const titleWrapper = document.getElementById("movie-selection-wrapper");
  if (titleWrapper) titleWrapper.style.display = "block";

  // Ẩn phần QR nếu đang hiện
  const qr = document.getElementById("qr-container");
  if (qr) qr.classList.add("hidden");

  // Hiện lại nút thanh toán nếu đã bị ẩn
  const payBtn = document.querySelector(
    "#booking button[onclick='proceedToPayment()']"
  );
  if (payBtn) payBtn.style.display = "inline-block";

  // Hiện tất cả phim
  showAllMovies();
}
