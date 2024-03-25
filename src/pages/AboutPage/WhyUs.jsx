import React from "react";

export const WhyUs = () => {
  const whyUsList = [
    {
      id: 1,
      title: "Tutku ve Bağlılık : ",
      text: " Futbolun ruhunu anlıyoruz çünkü biz de futbolun tutkulu bir parçasıyız. Sahada geçirdiğimiz her anı birlikte değerli kılıyor ve bu tutkuyu herkese ulaştırmak için çalışıyoruz.",
    },
    {
      id: 2,
      title: "Kapsamlı Hizmetler : ",
      text: "Sadece bir futbol maçı düzenleme platformu değiliz; aynı zamanda futbol deneyiminizi tamamlayan birçok ek hizmet sunuyoruz. Takım oluşturma, maç düzenleme, istatistik takibi, sosyal etkinlikler ve daha fazlası için tek bir çatı altındayız.",
    },
    {
      id: 3,
      title: "Kullanıcı Odaklı Yaklaşım : ",
      text: "Kullanıcılarımızın ihtiyaçlarını anlamak ve onların futbol deneyimini geliştirmek için sürekli çalışıyoruz. Geri bildirimlerinizi dinliyor, isteklerinizi dikkate alıyor ve platformumuzu sürekli olarak geliştiriyoruz.",
    },
    {
      id: 4,
      title: "Güvenilirlik ve Güvenlik : ",
      text: "Güvenilirlik ve güvenlik bizim için en önemli önceliklerden biridir. Kişisel bilgilerinizin ve işlemlerinizin güvenliğini sağlamak için en güncel güvenlik önlemlerini alıyor ve gizliliğinize saygı duyuyoruz.",
    },
    {
      id: 5,
      title: "Topluluk Desteği : ",
      text: "Sadece bir platform değil, aynı zamanda bir topluluğun parçası olma fırsatı sunuyoruz. Yeni arkadaşlar edinin, deneyimlerinizi paylaşın ve birlikte unutulmaz futbol anıları oluşturun.",
    },
    {
      id: 6,
      title: "Sosyal Sorumluluk : ",
      text: "Sadece futbol oynamakla kalmıyor, aynı zamanda topluma geri verme ve sosyal sorumluluk projelerine katılma konusunda kararlıyız. Toplumun farklı kesimlerine ulaşarak futbolun birleştirici gücünü herkese ulaştırmaya çalışıyoruz.",
    },
  ];

  return (
    <>
      <div className="w-full  laptop:px-80  text-left  text-black dark:text-white">
        <h1 className="px-5 text-4xl font-bold text-fcGreen">Neden Biz?</h1>
        <p className="px-5  my-6 text-lg">
          Futbolun Kalbi, futbol tutkunlarının yanı sıra, bir futbol ailesinin
          de bir parçası olmanın benzersiz avantajlarını sunar. İşte neden bizi
          tercih etmelisiniz:
        </p>
        <ul className="list-decimal px-10 laptop:px-20 ">
          {whyUsList.map((data) => {
            return (
              <div key={data.id} className="flex flex-row text-wrap	mb-5">
                <p className="w-full">
                  <span className="font-bold list-item ">{data.title}</span>
                  {data.text}
                </p>
              </div>
            );
          })}
        </ul>
        <p className="px-5  my-7 text-lg">
          Futbolun Kalbi olarak, futbolun sadece bir oyun olmadığını biliyoruz;
          aynı zamanda bir yaşam tarzı, bir tutku ve bir bağlılık işareti. Bu
          nedenle, sizin de bu tutkuyu bizimle paylaşmanızı ve bu macerada
          bizimle birlikte yer almanızı bekliyoruz. Haydi, futbol tutkusunu
          birlikte yaşayalım!
        </p>
      </div>
    </>
  );
};
