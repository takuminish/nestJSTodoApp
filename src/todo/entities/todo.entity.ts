import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {

    @PrimaryGeneratedColumn()
    todo_id: string;

    @Column()
    todo_title: string;

    @Column()
    todo_status: string;

    @Column()
    explanation: string;

    @Column()
    create_user: string;

    @Column(({ type: 'timestamp' }))
    created_at: Date;

    @Column()
    update_user: string;

    @Column(({ type: 'timestamp' }))
    update_at: Date;
}
