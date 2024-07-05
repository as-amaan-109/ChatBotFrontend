import React from "react";
import WhyusCard from "./WhyusCard";
import { PhotoIcon,LanguageIcon,AdjustmentsHorizontalIcon,BarsArrowDownIcon,ChatBubbleLeftRightIcon,TableCellsIcon,ArrowTrendingUpIcon,AtSymbolIcon ,UserIcon} from "@heroicons/react/20/solid";
const Whyus = () => {
  return (
    <div className="my-10 py-10 px-5 md:px-10">
      <h1 className="text-4xl font-bold  ">Why us ?</h1>
      <div className="grid grid-col-1 justify-center md:grid-cols-3 my-5 md:my-10">
        <WhyusCard
          icon={<PhotoIcon className="size-6 inline-block"/>}
          heading="Image generation"
          text="Using techniques like generative adversarial networks (GANs) or text-to-image models"
        />
        <WhyusCard
          icon={<AdjustmentsHorizontalIcon className="size-6 inline-block"/>}
          heading="Text conversion"
          text="Converting text to different formats, like speech or braille"
        />
        <WhyusCard
          icon={<LanguageIcon className="size-6 inline-block"/>}
          heading="Translation"
          text=" Translating text from one language to another"
        />
        <WhyusCard
          icon={<BarsArrowDownIcon className="size-6 inline-block"/>}
          heading="Summarization"
          text=" Summarizing long texts into shorter versions"
        />
        <WhyusCard
          icon={<ChatBubbleLeftRightIcon className="size-6 inline-block"/>}
          heading="Question answering"
          text="Answering user questions based on a knowledge base or search results"
        />
        <WhyusCard
          icon={<TableCellsIcon className="size-6 inline-block"/>}
          heading="Dialogue management"
          text="Managing conversations and responding appropriately"
        />
        <WhyusCard
          icon={<ArrowTrendingUpIcon className="size-6 inline-block"/>}
          heading="Sentiment analysis"
          text="Analyzing user sentiment and emotions"
        />
        <WhyusCard
          icon={<AtSymbolIcon className="size-6 inline-block"/>}
          heading="Language understanding"
          text=" Understanding natural language and detecting things like sarcasm or idioms"
        />
        <WhyusCard
          icon={<UserIcon className="size-6 inline-block"/>}
          heading="Person based Explaination"
          text="Depending on person age , qulification answer generations for better understanding"
        />
      </div>
    </div>
  );
};

export default Whyus;
