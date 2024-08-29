use anchor_lang::prelude::*;

declare_id!("EicPcmwBb8qMhWqpV7TtyRvSbYgRvcqYNE8fbEcTzRCT");

#[program]
pub mod myepicproject {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
