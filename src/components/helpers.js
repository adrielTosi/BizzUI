import React from "react"
import Fade from "react-reveal/Fade"
import BCard from "components/bizzUI/BCard"
import BCardTitle from "components/bizzUI/BCardTitle"
import BOptions from "components/bizzUI/BOptions"
import BOptionItem from "components/bizzUI/BOptionItem"

export const renderCardChildren = (children, style) => {
  const title = []
  const rest = []
  // Separates the children into Title and Rest, so title is always displayed above
  const arrayChildren = React.Children.toArray(children)
  arrayChildren.forEach(child => {
    if (child.type && child.type.name === "BCardTitle") {
      title.push(child)
    } else {
      rest.push(child)
    }
  })
  return (
    <div className={style.cardContainer}>
      <div>{title.length !== 0 && title[0]}</div>
      <div>{rest}</div>
    </div>
  )
}

export const questionsMapper = (stateQuestionItems, pathname) => {
  const showAnswers = pathname === "/answers"

  return (
    <div data-testid="questions-mapper">
      {stateQuestionItems.map(question => (
        <Fade Bottom wait={500}>
          <BCard key={question.id}>
            <BCardTitle title={question.title} />
            <BOptions>
              {question.options.map(option => (
                <BOptionItem
                  key={option.id}
                  questionId={question.id}
                  optionId={option.id}
                  url={option.img.url}
                  title={option.title}
                  subtitle={option.subtitle}
                  block={option.blockWidth}
                  checked={option.checked}
                  // totalVotes={question.totalVotes}
                  // optionVotes={option.votes}
                  // showAnswers={showAnswers}
                />
              ))}
            </BOptions>
          </BCard>
        </Fade>
      ))}
    </div>
  )
}
