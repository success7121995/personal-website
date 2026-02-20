export interface SectionProps {
    title: string
    template: JSX.Element
    content: TemplateProps
    contentAlign: 'left' | 'center' | 'right'
}

export type TemplateProps = 
    | AboutMeTemplateProps
    | WorkExperienceTemplateProps[]
    | EducationTemplateProps[]

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

export interface EducationTemplateProps {
    course: string
    institutionName: string
    startDate: Date
    endDate?: Date
    description?: string
    imageUrl?: string
}