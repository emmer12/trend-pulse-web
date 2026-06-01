<template>
  <NuxtLink v-if="to" :target="target" :class="classes" :to="to">
    <template v-if="iconLeft">
      <span class="inline-flex items-center mr-[8px]" v-html="iconLeft" />
    </template>
    {{ text }}
    <template v-if="iconRight">
      <span class="inline-flex items-center ml-[8px]" v-html="iconRight" />
    </template>
  </NuxtLink>
  <button v-else :type="type" class="relative" :class="classes" @click="onClick" :disabled="disabled">
    <template v-if="iconLeft">
      <span class="inline-flex items-center mr-[8px]" v-html="iconLeft">
      </span>
    </template>
    <span :class="loading ? 'opacity-0' : 'opacity-100'">{{ text }}</span>
    <template v-if="iconRight">
      <span class="inline-flex items-center ml-[8px]" v-html="iconRight"></span>
    </template>

    <IconsLoader v-show="loading" class="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, type ButtonHTMLAttributes } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
      default: "Submit",
    },
    type: {
      type: String as PropType<ButtonHTMLAttributes["type"]>,
      default: "button",
    },
    iconLeft: {
      type: String,
    },
    iconRight: {
      type: String,
    },
    class: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String as () =>
        | "primary"
        | "secondary"
        | "dark"
        | "warning"
        | "danger"
        | "outline"
        | "ghost"
        | "success"
        | "error"
        | "monochrome"
        | "monochrome-outlined"
        | "whitePrimary"
        | "outline-secondary",
      default: "primary",
    },
    to: {
      type: String,
      default: undefined,
    },
    target: {
      type: String,
      default: undefined,
    },
    size: {
      type: String as () => "lg" | "md" | "sm" | "xs",
      default: "md",
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  emits: ["click"],
  setup(props, { emit }) {
    function onClick(event: any) {
      emit("click", event);
    }

    const classes = computed(() => {
      let value =
        " rounded-[200px] focus:outline-none font-semibold transition flex-nowrap  cursor-pointer";
      switch (props.variant) {
        case "primary":
          value +=
            "text-white bg-primary hover:bg-primary_hover focus:bg-primary_hover disabled:bg-surface disabled:text-[#AFABAB] ";
          break;
        case "secondary":
          value +=
            "text-[#344054] bg-[#131212] border-[1.5px] border-[#D0D5DD] hover:bg-secondary_hover focus:bg-secondary_hover";
          break;
        case "monochrome":
          value +=
            "text-white bg-[#302C2C]   hover:bg-[#201D1D] focus:bg-[#201D1D] disabled:bg-[#F7F7F7] disabled:text-[#AFABAB]";
          break;
        case "monochrome-outlined":
          value +=
            "text-[#3F3B3B] bg-transparent border  border-[#DFDEDE] hover:bg-[#F3F2F2] focus:bg-[#E6E5E5] disabled:bg-[#F7F7F7] disabled:text-[#AFABAB]";
          break;
        case "whitePrimary":
          value +=
            "text-primary bg-white border-[1.5px] border-[#DFDEDE] hover:bg-secondary_hover focus:bg-secondary_hover";
          break;

        case "dark":
          value +=
            "text-[#fff] bg-[#0F0F13] hover:bg-secondary_hover focus:bg-secondary_hover";
          break;
        case "warning":
          value +=
            "text-white bg-orange-600 hover:bg-orange-800 focus:bg-orange-800 focus:ring-orange-800";
          break;
        case "danger":
        case "error":
          value +=
            " !text-[#8E1F0B] bg-[#FDE9E7] hover:!text-white hover:bg-[#E51C01] focus:!text-white focus:bg-[#B01E0B] focus:ring-[#B01E0B]";
          break;
        case "outline":
          value +=
            "text-primary border border-[#D0D5DD] hover:bg-secondary_hover focus:bg-secondary_hover hover:text-primary";
          break;
        case "outline-secondary":
          value +=
            "text-[#344054] border border-[#D0D5DD] hover:bg-[#F3F2F2] focus:bg-[#DFDEDE] focus:border-[#DFDEDE] hover:text-black";
          break;
        case "ghost":
          value +=
            "text-primary  hover:bg-secondary_hover focus:bg-secondary_hover hover:text-primary";
          break;
        case "success":
          value +=
            " !text-white bg-[#2A845A] hover:!text-white hover:!bg-[#186E46] focus:!text-white focus:!bg-[#0C5132] focus:ring-[#0C5132]";
        default:
          value +=
            "text-black hover:bg-secondary_hover focus:bg-secondary_hover";
          break;
      }

      if (props.disabled) {
        value += " disabled:opacity-[1]";
      }

      switch (props.size) {
        case "lg":
          value += " px-6 py-3 text-base";
          break;
        case "md":
          value += " px-6 py-2.5 text-sm";
          break;
        case "sm":
          value += " px-4 py-2 text-xs";
          break;
        case "xs":
          value += " px-3 py-1.5 text-xs";
          break;
        default:
          value += " px-6 py-3 text-base";
          break;
      }

      switch (props.block) {
        case true:
          value += " flex w-full items-center justify-center";
          break;
        default:
          value += " inline-flex items-center justify-center";
          break;
      }

      if (props.class) {
        value += " " + props.class;
      }

      return value;
    });

    return {
      onClick,
      classes,
    };
  },
});
</script>
