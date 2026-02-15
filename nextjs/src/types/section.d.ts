export interface SectionProps {
    title: string
    template: JSX.Element
    content: TemplateData
    contentAlign: 'left' | 'center' | 'right'
}

export type TemplateProps = 
    | AboutMeTemplateProps
    | WorkExperienceTemplateProps[]


/*********** Template Props ***********/
export interface AboutMeTemplateProps {
    description?: string
    imageUrl?: string
}

export interface WorkExperienceTemplateProps {
    companyName: string
    position: string
    startDate: Date
    endDate?: Date
    description?: string
}