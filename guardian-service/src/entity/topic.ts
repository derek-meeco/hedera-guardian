import { TopicType } from 'interfaces';
import { Column, Entity, ObjectIdColumn } from 'typeorm';


@Entity()
export class Topic {
    @ObjectIdColumn()
    id: string;

    @Column()
    topicId: string;

    @Column()
    description: string;

    @Column()
    owner: string;

    @Column()
    type: TopicType;

    @Column()
    key: string;

    @Column()
    policyId: string;

    @Column()
    policyUUID: string;
}
