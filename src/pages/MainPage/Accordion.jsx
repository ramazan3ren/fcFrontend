import React, { useContext } from "react";
import AccordionItem from "./AccordionItem";
import Context from "../../context/context";

export const Accordion = () => {
  const { expanded, accordionChange } = useContext(Context);

  const accordionQuestion = [
    {
      id: 1,
      question: "Nasıl hızlı bir şekilde takım oluşturabilirim?",
      answer:
        'Sitemize üye olduktan sonra, "Takım Oluştur" sayfasından takımınızı kurabilirsiniz. İlgi alanlarınızı ve beceri seviyenizi belirterek, sizinle benzer seviyede olan oyuncuları bulabilir ve doğrudan takımınıza davet edebilirsiniz.',
    },
    {
      id: 2,
      question: "Maçlar için nasıl randevu alabilirim?",
      answer:
        '"Randevu Al" bölümünden, tercih ettiğiniz tarih ve saat için uygun sahaları görebilirsiniz. Size ve takımınıza en uygun sahayı seçtikten sonra, birkaç tıklama ile randevunuzu kolayca alabilirsiniz.',
    },
    {
      id: 3,
      question: "Hangi bölgelerde hizmet veriyorsunuz?",
      answer:
        "Şu anda hizmetlerimiz anlaşmalı olduğumuz tesislerle geçerli olup tüm futbolseverlere açıktır. Ancak, platformumuzu daha fazla bölgeye genişletmek için çalışmalarımız devam etmektedir. Yeni bölgeler hakkında bilgi almak için lütfen sitemizi takip edin.",
    },
    {
      id: 4,
      question: "Üyelik için herhangi bir ücret ödemem gerekiyor mu?",
      answer:
        'Hayır, sitemize üye olmak tamamen ücretsizdir! Ancak, bazı özel hizmetlerimiz ve saha rezervasyonları için minimal ücretler alınmaktadır. Detaylı bilgi için "Ücretler ve Paketler" sayfamızı ziyaret edebilirsiniz.',
    },
    {
      id: 5,
      question:
        "Maçımı iptal etmek veya yeniden planlamak istiyorsam ne yapmalıyım?",
      answer:
        'Maçınızı iptal etmek veya yeniden planlamak için, "Randevularım" bölümünden ilgili maçı seçerek istediğiniz değişikliği yapabilirsiniz. Lütfen iptal ve yeniden planlama politikalarımız için "Kullanım Koşulları" sayfamıza göz atın.',
    },
    {
      id: 6,
      question: "Takımıma nasıl oyuncu davet edebilirim?",
      answer:
        'Takımınıza oyuncu davet etmek için, üye olduğunuz andan itibaren erişebileceğiniz "Takımım" sayfasından "Oyuncu Davet Et" seçeneğini kullanabilirsiniz. Davet etmek istediğiniz oyuncuların kullanıcı adlarını girerek, onlara doğrudan davetiye gönderebilirsiniz.',
    },
  ];
  
  return (
    <>
      <div className="w-full h-full">
        {accordionQuestion.map((question) => {
          return (
            <div className="mb-3" key={question.id}>
              <AccordionItem
                question={question}
                expanded={expanded}
                handleChange={accordionChange}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
