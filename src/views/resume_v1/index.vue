<template>
  <div class="page-box">
    <div class="page">
      <div class="left">
        <a :href="i.avatar" target="_blank">
          <img :src="i.avatar" class="avatar" />
        </a>
        <h1 class="name">{{ i.name }}</h1>
        <span class="position">求职意向: {{ i.title }}</span>
        <div class="title">个人信息</div>
        <div class="base-info">
          <span>性 别:</span><span>{{ i.gender }}</span>

          <span>年龄:</span
          ><span>{{ age }} 岁({{ formatDate(i.birthday, "Y/M") }})</span>

          <span>学 历:</span><span>{{ i.degree }}</span>

          <span>工作经验:</span><span>{{ workyear }} 年</span>

          <span>婚姻状况:</span><span>{{ i.married }}</span>

          <span>民 族:</span><span>{{ i.nation }}</span>

          <span>籍 贯:</span><span>{{ i.native_place }}</span>

          <span>居住地:</span><span>{{ i.city }}</span>

          <span>身 高:</span><span>{{ i.height }}</span>

          <span>体 重:</span><span>{{ i.weight }}</span>
        </div>
        <div class="title">联系方式</div>
        <div class="contact">
          <span class="flex items-center"
            ><icon icon="wpf:iphone"></icon>手机:</span
          ><span>{{ i.phone }}</span>

          <span class="flex items-center"
            ><icon icon="ic:baseline-wechat"></icon>微信:</span
          ><span>{{ i.wechat }}</span>

          <span class="flex items-center"
            ><icon icon="icon-park:tencent-qq"></icon>QQ:</span
          ><span>{{ i.qq }}</span>

          <span class="flex items-center"
            ><icon icon="ic:outline-email"></icon>邮箱:</span
          ><span>{{ i.email }}</span>

          <span class="flex items-center"
            ><icon icon="mdi:resume"></icon>简历:</span
          ><a :href="i.website" class="text-xs text-sky-400 underline">{{
            i.website
          }}</a>
        </div>
        <div class="title">兴趣爱好</div>
        <div class="hobbies">
          <div v-for="x in i.hobbies" :key="x.value" class="hobby">
            <icon :icon="x.icon" />
            <span>{{ x.value }}</span>
          </div>
        </div>
        <div class="title">获得证书</div>
        <div class="certificates">
          <span v-for="x in i.certificates" :key="x">{{ x }}</span>
        </div>
      </div>
      <div class="right">
        <div class="title">
          <span>个人优势</span>
        </div>
        <div v-html="parse_md(i.intro)" class="intro"></div>
        <div class="title">
          <span>工作经历</span>
        </div>
        <div>
          <div v-for="x in i.experiences" :key="x.company" class="experience">
            <div class="text-sm flex justify-between font-bold field-3">
              <span class="daterange"
                >{{ formatDate(x.start_date, "Y/M") }} -
                {{ formatDate(x.end_date, "Y/M") }}</span
              >
              <span>{{ x.company }}</span>
              <span>{{ x.title }}</span>
            </div>
            <div
              v-html="parse_md(x.intro)"
              class="my-3 mb-6 text-sm intro"
            ></div>
          </div>
        </div>
        <div class="title">
          <span>项目经历</span>
        </div>
        <div>
          <div v-for="x in i.projects" :key="x.name" class="project">
            <div class="text-sm flex justify-between font-bold field-3">
              <span class="daterange"
                >{{ formatDate(x.start_date, "Y/M") }} -
                {{ formatDate(x.end_date, "Y/M") }}</span
              >
              <span>{{ x.name }}</span>
              <span>{{ x.role }}</span>
            </div>
            <div class="my-3 mb-5 flex flex-col gap-1">
              <div>
                <span class="text-sm font-bold">内容: </span>
                <span class="text-sm ml-1">{{ x.content }}</span>
              </div>
              <div v-if="x.achivement">
                <span class="text-sm font-bold">业绩: </span>
                <span class="text-sm ml-2">{{ x.achivement }}</span>
              </div>
              <div v-if="x.link">
                <span class="text-sm font-bold">链接: </span>
                <a
                  :href="x.link"
                  class="text-sky-400 underline text-sm ml-2"
                  target="_blank"
                  >{{ x.link }}</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="title">
          <span>教育背景</span>
        </div>
        <div class="education flex gap-2 items-center">
          <img :src="i.education.logo" class="logo w-52px h-52px" />
          <div class="flex gap-2 items-start justify-between flex-1">
            <div>
              <span class="font-bold">{{ i.education.school }}</span>
              <p class="flex gap-1 items-center text-sm">
                <span>{{ i.degree }}</span>
                <span>|</span>
                <span>{{ i.education.location }}</span>
                <span>|</span>
                <span>{{ i.education.major }}</span>
              </p>
            </div>
            <span class="daterange text-sm"
              >{{ formatDate(i.education.start_date, "Y/M") }} -
              {{ formatDate(i.education.end_date, "Y/M") }}</span
            >
          </div>
        </div>
        <div class="title flex justify-between items-end">
          <span>掌握技能</span>
          <div class="w-100px flex">
            <span
              v-for="(_, k) in colormap"
              :key="k"
              :class="{ [colormap[k]]: true, active: current == k }"
              class="flex-1 text-center font-normal text-white cursor-pointer colorbox"
              @click="current = current === k ? null : k"
              >{{ k }}</span
            >
          </div>
        </div>
        <TransitionGroup name="list">
          <div class="skills" v-for="x in categories" :key="x.value">
            <fieldset class="category">
              <legend>{{ x.value }}</legend>
              <div
                v-for="y in x.skills"
                :key="y.value"
                class="skill cursor-pointer"
                :class="colormap[y.score]"
                :title="y.desc"
              >
                {{ y.value }}
              </div>
            </fieldset>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<script setup>
import { parse_md } from "@/utils/markdown.js";
import i from "@/assets/resume.js";
import { formatDate } from "@/utils/date.js";
import { computed, ref, watch } from "vue";
const age = new Date().getFullYear() - i.birthday.getFullYear();
const workyear = new Date().getFullYear() - i.workyear;
const colormap = {
  1: "bg-gray-400",
  2: "bg-lime-400",
  3: "bg-yellow-400",
  4: "bg-sky-400",
  5: "bg-red-400",
};
const current = ref(null);
watch(current, () => {
  setTimeout(() => {
    const ele = document.documentElement;
    ele.scroll({
      top: ele.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  }, 200);
});
const categories = computed(() => {
  if (current.value === null) {
    return i.categories;
  }
  const categories = JSON.parse(JSON.stringify(i.categories));
  return categories
    .map((x) => {
      x.skills = x.skills.filter((y) => y.score == current.value);
      return x;
    })
    .filter((i) => i.skills.length !== 0);
});
</script>

<style lang="scss">
.colorbox {
  @apply transition-all;
  &.active {
    transform: scale(1.15) !important;
  }
  &:hover {
    transform: scale(1.08);
  }
}

.list-move, /* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}

img {
  -webkit-user-drag: none;
  user-select: none;
}
@media print {
  .page-box {
    .page {
      box-shadow: unset !important;
      @apply border border-gray-200;
      .field-3 {
        @apply text-xs;
      }
    }
  }
}
.page-box {
  -webkit-print-color-adjust: exact;
  @apply min-h-100vh flex justify-center items-center text-gray-700;
  --primary-color: #c2d6ec;
  .page {
    @apply mx-auto w-1000px shadow-lg bg-white min-h-95vh;
    display: grid;
    grid-template-columns: 3fr 7fr;
    .left {
      @apply bg-[#f2f2f2] p-5;
      .avatar {
        @apply mx-auto block w-150px;
      }
      .name {
        @apply font-bold text-lg text-center my-2;
      }
      .position {
        @apply text-center block;
      }
      .title {
        @apply bg-[var(--primary-color)] px-3 py-1 font-bold my-5;
        --border-radius: 10px;
        border-top-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      .base-info,
      .contact {
        @apply gap-2 text-sm items-center;
        display: grid;
        grid-template-columns: minmax(50px, auto) 1fr;
      }
      .hobbies {
        @apply flex flex-wrap gap-3 text-xs items-center;
        .hobby {
          @apply flex flex-col items-center  relative;
          &:not(:last-child)::after {
            @apply bg-gray-400;
            --height: 14px;
            content: "";
            height: var(--height);
            width: 1px;
            position: absolute;
            right: -5px;
            top: calc(50% - var(--height) / 2);
          }
        }
      }
      .certificates {
        @apply flex flex-wrap gap-2 text-xs items-center;
        span {
          @apply rounded border-[var(--primary-color)] border p-1;
        }
      }
    }
    .right {
      @apply p-5;
      .title {
        @apply font-bold relative my-5;
        border-bottom: 3px solid #bcbcbc;
        > span {
          @apply text-center inline-block w-100px py-3;
          &::after {
            @apply absolute;
            content: "";
            width: 100px;
            height: 9px;
            background-color: var(--primary-color);
            z-index: 1000;
            bottom: -3px;
            left: 0;
          }
        }
      }
      .intro {
        @apply text-sm;
        p {
          @apply mb-1;
        }
      }
      .skills {
        @apply text-xs;
        .category {
          @apply border border-[var(--primary-color)] border-dashed flex flex-wrap gap-2 mb-2 rounded p-3;
          .skill {
            @apply rounded text-white p-1;
          }
          legend {
            @apply mx-5 bg-[var(--primary-color)] p-1 text-center transition-all relative cursor-pointer rounded;
            overflow: hidden;
            // border: 1px outset var(--primary-color);
            &::after {
              content: "";
              height: 10px;
              width: 300%;
              position: absolute;
              left: 0;
              top: 0;
              transform: translateX(-100px) rotate(-40deg);
              z-index: 1000;
              opacity: 0.5;
              background: linear-gradient(
                to bottom,
                transparent,
                #fff,
                transparent
              );
              // background: red;
            }
          }
          &:hover {
            legend {
              &::after {
                transition: all 1s ease;
                filter: blur(30px);
                backdrop-filter: brightness(2);
                transform: translateX(100px) rotate(-40deg);
              }
            }
          }
        }
      }
    }
  }
}
</style>

<style>
body {
  @apply bg-[#f3f4f6];
}
</style>
