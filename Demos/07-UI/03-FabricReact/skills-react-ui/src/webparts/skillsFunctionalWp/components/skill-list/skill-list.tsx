import * as React from 'react';
import { FC } from 'react';
import { Skill } from '../skill';
import { SkillItem } from '../skill-item/skill-item';


export interface ISkillsListProps {
    skills: Skill[]
}

export const SkillsList : FC<ISkillsListProps> = (props: ISkillsListProps) => {

    return (
        <div>
          {
            props.skills.map((sk: Skill)=>{
                return (<SkillItem item={sk} key={sk.ID} ></SkillItem>)
            })
          }
          <div>Click to delete</div>
        </div>
      )
}