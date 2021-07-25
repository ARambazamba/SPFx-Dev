import * as React from 'react';
import { FC, useState } from 'react';
import { DefaultButton, ButtonType } from "office-ui-fabric-react";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { Skill } from '../skill';

export interface ISkillAddProps {
    addSkill(skill: Skill): void
}

export const SkillAdd : FC<ISkillAddProps> = (props: ISkillAddProps) => {

    const [editSkill, setEditSkill] = useState('');

	const handleSkillChange = (e: React.FormEvent<HTMLInputElement>)=> {
        setEditSkill( e.currentTarget.value );
	}

    return (
        <div className="addRow">
            <TextField
              onChange={handleSkillChange}
              label="Enter a new skill:"
              style={{ width: "200px" }}
            ></TextField>

            <DefaultButton
              buttonType={ButtonType.primary}
              onClick={() => props.addSkill }
            >
              Add
            </DefaultButton>          
        </div>
    )
}

