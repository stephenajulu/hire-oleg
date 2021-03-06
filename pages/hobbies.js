import React, { useEffect } from "react";
import Head from "next/head";
import PageTitle from "../components/styled/PageTitle";
import PageMain from "../components/styled/PageMain";
import { colors } from "../variables";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import Router from "next/router";

const Hobbies = ({ lang }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  useBottomScrollListener(() => Router.push("/this-site"));
  let ru = lang === "ru";
  return (
    <PageMain>
      <Head>
        <title>What Are His Hobbies - Hire Oleg</title>
        <meta name="description" content="Learn about Oleg's cool hobbies." />
        <meta property="og:title" content="What Are His Hobbies" />
        <meta
          property="og:description"
          content="Learn about Oleg's cool hobbies."
        />
        <meta property="og:url" content="https://hire-oleg.now.sh/hobbies" />
      </Head>
      <PageTitle lang={lang}>
        {ru ? "Чем я занимаюсь кроме кодинга" : "What I do besides coding"}
      </PageTitle>
      <ol>
        <li style={{ marginBottom: "2em" }}>
          <strong>
            {ru ? "Физические тренировки. " : "Fitness and working out. "}
          </strong>
          {ru
            ? "Я считаю очень важным поддерживать физическую активность и быть в хорошей форме. Я регулярно выполняю тренировки, использующие только вес собственного тела, и предпочитаю их тренировкам с использованием железа в спортзале. Я также практикую здоровое питание. Я не пью алкоголь и не курю."
            : "I consider it really important to stay physically active and in good shape. I regularly do bodyweight workouts, which I prefer to external weight lifting at the gym. I also eat healthy food. I don't drink alcohol or smoke."}
        </li>
        <li style={{ marginBottom: "2em" }}>
          <strong>
            {ru ? "Пение и музыка. " : "Singing and playing music. "}
          </strong>
          {ru
            ? "Почему-то издавание (приятных) звуков приносит глубокое удовлетворение. Я умею играть на гитаре и на губной гармошке, хотя уже довольно давно не делал ни того, ни другого. В будущем я снова куплю гитару, и буду играть чаще."
            : "Something is just really satisfying about making (nice) sounds. I can play guitar and harmonica, though I haven't done either in a while. I will buy a guitar again in the future, and will play more then."}
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: "0",
              backgroundColor: `${colors.darkGray}`,
              marginTop: "0.7rem"
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/nDeIAO0LtdA"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                display: "block",
                zIndex: "1"
              }}
            ></iframe>
          </div>
        </li>
        <li>
          <strong>{ru ? "Чтение. " : "Reading. "}</strong>
          {ru
            ? "Я почерпнул много мудрости из книг. Самые умные идеи, с которыми мне доводилось иметь дело, пришли из книг. Я читаю часто и много."
            : "I have found much wisdom in books. The smartest ideas I was ever exposed to came from books. I often read, and I read a lot."}
        </li>
      </ol>
    </PageMain>
  );
};

export default Hobbies;
