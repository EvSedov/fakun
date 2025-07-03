<script setup>
import spainFlag from "@/assets/images/flag-spain.svg";
import productionGif from "@/assets/images/production-process.gif";
</script>

<template>
  <!-- {{ block_1 }} Контейнер секции -->
  <section id="production" class="bg-[#2A2A2A] py-7.5">
    <!-- Заголовок -->
    <h2
      class="font-prosto text-[24px] text-[#72C95E] text-center mb-5"
      style="line-height: 1.23"
    >
      ПРОИЗВОДСТВО
    </h2>
    <div class="max-w-[1152px] mx-auto flex gap-[81px] items-start">
      <!-- {{ block_2 }} Левая часть: текст -->
      <div class="flex-1 flex flex-col gap-[30px]">
        <!-- {{ block_2_1 }} Флаг и подпись -->
        <div class="flex items-center gap-3">
          <img :src="spainFlag" alt="Испания" class="w-[49px] h-[37px]" />
          <div>
            <span class="text-[#72C95E] font-bold">
              Город Реус, провинция Таррагона, Испания
            </span>
            <div class="text-white text-base">
              - именно здесь мы производим ракетки Fakun
            </div>
          </div>
        </div>
        <!-- {{ block_2_2 }} Текстовые абзацы с акцентами -->
        <div
          class="flex flex-col gap-[30px] text-white text-base font-normal leading-[1.33] font-evolventa"
        >
          <p>
            Тщательно продуманный процесс производства в сочетании с
            использованием сертифицированного
            <span class="text-[#72C95E] font-semibold">
              европейского сырья
            </span>
            позволяет нам создавать падел-ракетки непревзойденного качества. Мы
            закупаем карбоновое волокно и смолу у тех же производителей, которые
            поставляют материалы для Ferrari, Lamborghini и истребителей
            Eurofighter.
          </p>
          <p>
            Fakun производит ракетки всех типов весом от 300 до 360 граммов.<br />
            По специальному заказу мы изготавливаем ракетки меньшего веса.
          </p>
          <p>
            Мы делаем
            <span class="text-[#72C95E] font-semibold">индивидуальные</span>
            падел-ракетки, каждая из которых обладает уникальными
            характеристиками.<br />
            Эти ракетки разработаны с учетом индивидуальных потребностей
            игроков, включая их физические данные и уровень профессионализма.
            Каждая модель оптимизирована для максимального комфорта и
            эффективности на корте, обеспечивая
            <span class="text-[#72C95E] font-semibold"
              >превосходный контроль и мощность</span
            >.
          </p>
          <p>
            Все ракетки производятся с интегрированным покрытием, что делает их
            неподверженными износу и гарантирует
            <span class="text-[#72C95E] font-semibold"
              >неизменный внешний вид</span
            >. Всех их объединяет одно — встроенная система антивибрации. С
            ракетками <span class="text-[#72C95E] font-semibold">FAKUN</span> вы
            надежно защищены от риска развития тендинита! Забота о вашем
            <span class="text-[#72C95E] font-semibold">здоровье</span> — это наш
            приоритет!
          </p>
        </div>
      </div>
      <!-- {{ block_3 }} Правая часть: фото производства -->
      <div
        class="w-[314px] h-[526px] border border-[#72C95E] rounded-md overflow-hidden flex-shrink-0"
      >
        <img
          :src="productionGif"
          alt="Производство Fakun"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
