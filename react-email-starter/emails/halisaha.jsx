import {
  Body,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Container,
  Tailwind,
  Link,
  Column,
  Row,
  Button,
  Hr,
  Heading,
  Text,
} from "@react-email/components";
import React from "react";

export const halisaha = () => {
  return (
    <Html>
      <Head />
      <Preview>FC Hesabınızı Şimdi Aktive Edin</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                whiteBg: "#F7F7F7",
                fcLightGray: "#EDF1D6",
                fcGreen: "#609966",
                fcDarkGreen: "#40513B",
                fcLightGreen: "#9DC08B",
                fcFacility: "#008972",
                darkThemeColor: "#121212",
                darkThemeAppColor: "#1f1f1f",
              },

              borderRadius: {
                customFull: "2.7rem",
              },
              screens: {
                mobileS: "320px",
                mobileM: "375px",
                mobileL: "425px",
                tablet: "768px",
                laptop: "1024px",
                laptopL: "1440px",
                "4k": "2560px",
              },
            },
            fontFamily: {
              montserrat: "Montserrat",
              publicSans: "Public Sans",
              josefin: ["Josefin Sans", "sans-serif"],
            },
          },
        }}
      >
        <Body className="bg-white my-auto mx-auto font-montserrat">
          <Container className="rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={
                  "https://i.pinimg.com/736x/9e/b7/65/9eb765ba9b4592232b345966fa1b7c5f.jpg"
                }
                width="40"
                height="37"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              FC Hesabızı Onaylayın
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Merhaba {" "}
              <span className="text-fcGreen font-bold ">Kullanıcı Adı,</span>
            </Text>
            <Text>
              FC ailesine hoş geldiniz! Hesabınızı tam olarak aktive etmek ve
              platformumuzdaki avantajlardan yararlanmaya başlamak için lütfen
              aşağıdaki linke tıklayarak üyeliğinizi doğrulayın:
            </Text>
            <Section>
              <Row>
                <Column align="right">
                  <Img
                    className="rounded-full"
                    src={
                      "https://i.pinimg.com/736x/d8/65/fd/d865fd39b1e3252b9d0a7abf977718e1.jpg"
                    }
                    width="50"
                  />
                </Column>
                <Column align="center">
                  <Img
                    src={
                      "https://cdn0.iconfinder.com/data/icons/typicons-2/24/arrow-right-512.png"
                    }
                    width="24"
                  />
                </Column>
                <Column align="left">
                  <Img
                    className="rounded-full"
                    src={
                      "https://i.pinimg.com/736x/9e/b7/65/9eb765ba9b4592232b345966fa1b7c5f.jpg"
                    }
                    width="50"
                  />
                </Column>
              </Row>
            </Section>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button className="bg-fcGreen rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3">
                FC Üyeliğimi Onaylıyorum
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              Linke tıkladığınızda, hesabınızı doğrulayacak ve FC topluluğuna
              katılacaksınız. Bu adımı tamamladıktan sonra, takımlarınızı
              oluşturabilir, maçlarınızı düzenleyebilir ve futbol tutkusunu
              paylaşan birçok kişiyle etkileşimde bulunabilirsiniz.
            </Text>
            <Text>
              Eğer linke tıklamada herhangi bir sorun yaşarsanız veya herhangi
              bir yardıma ihtiyacınız olursa, lütfen bize ulaşmaktan çekinmeyin.
              Sizlere yardımcı olmaktan mutluluk duyarız.
            </Text>
            <Text>
              FC ekibi olarak, sizinle birlikte futbol tutkusunu paylaşmak için
              sabırsızlanıyoruz!
            </Text>
            <Text>
              {" "}
              Saygılarımızla, <br />
              FC Ekibi
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[24px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              <Head className="font-bold ">Değerli Kullanıcı,</Head> <br />
              FC olarak, müşteri güvenliği ve gizliliği bizim için en yüksek
              önceliktir. Hesabınızın güvenliği konusunda endişeleriniz varsa,
              size huzur ve güven sağlamak için buradayız. Platformumuzu
              kullanırken herhangi bir güvenlik sorunu veya şüphe yaşarsanız,
              lütfen bize ulaşın.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default halisaha;
