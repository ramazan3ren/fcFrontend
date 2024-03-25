import React from "react";

export const WhatDoWeDo = () => {
  const list = [
    {
      id: 1,
      title: "Takım Oluşturma : ",
      text: "Amatör veya profesyonel, her seviyede futbolcu için uygun takımlar bulmanızı sağlıyoruz. İlgi alanlarınıza, yaşınıza ve beceri seviyenize uygun takımlarla hızlıca bağlantı kurun.",
    },
    {
      id: 2,
      title: "Maç Düzenleme : ",
      text: "Sahada oynamak istediğiniz zaman ve yerde maçlar düzenleyin. Esnek randevu sistemiyle istediğiniz tarih ve saatte sahada olma özgürlüğünü yaşayın.",
    },
    {
      id: 3,
      title: "Futbol Topluluğu : ",
      text: "Geniş ve çeşitli bir futbolsever topluluğuna katılın. Yeni arkadaşlar edinin, deneyimlerinizi paylaşın ve futbol tutkunlarının heyecanını birlikte yaşayın.",
    },
    {
      id: 4,
      title: "Etkinlikler ve Turnuvalar : ",
      text: "Yıl boyunca düzenlediğimiz çeşitli etkinlikler ve turnuvalarla futbol deneyiminizi daha da zenginleştirin. Kendinizi gösterme şansı yakalayın ve unutulmaz anlar yaşayın.",
    },
    {
      id: 5,
      title: "Gelişmiş İstatistikler : ",
      text: "Maçlarınızın istatistiklerini kaydedin, performansınızı takip edin ve kendinizi geliştirmek için verileri analiz edin. En iyi performansınızı sergilemek için gerekli araçları sunuyoruz.",
    },
    {
      id: 6,
      title: "Sosyal Sorumluluk Projeleri : ",
      text: "Sadece bir futbol platformu olmakla kalmıyor, aynı zamanda topluma geri verme ve sosyal sorumluluk projelerine katılma konusunda kararlıyız. Toplumun farklı kesimlerine ulaşarak futbolun birleştirici gücünü herkese ulaştırmaya çalışıyoruz.",
    },
  ];

  return (
    <>
      <div className="w-full laptop:px-80  text-left  text-black dark:text-white">
        <h1 className="px-5 text-4xl font-bold text-fcGreen">
          Neler Yapıyoruz?{" "}
        </h1>
        <p className="px-5  my-6 text-lg">
          Futbolun her seviyesinde ve herkes için erişilebilir olmasını sağlamak
          için çalışıyoruz. İşte Futbolun Kalbi olarak bizim sunduğumuz
          hizmetler:
        </p>
        <ul className="list-decimal px-10 laptop:px-20 ">
          {list.map((data) => {
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
          Futbolun sadece bir oyun olmadığını, aynı zamanda dostlukların,
          heyecanın ve dayanışmanın bir sembolü olduğunu biliyoruz. Bu nedenle,
          futbolseverlerin bir araya gelmesini ve bu tutkuyu birlikte yaşamasını
          sağlamak için çalışıyoruz. Siz de bu macerada bizimle birlikte yer
          alın ve futbol tutkusunu doyasıya yaşayın!
        </p>
      </div>
    </>
  );
};
